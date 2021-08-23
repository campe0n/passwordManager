import React from "react";
import { Link } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { QUERY_PASSWORDS } from "../utils/queries";

import PasswordList from "../components/PasswordList";

const styles = {
  divCard: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  card: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#3F51B5",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    transition: "0.3s",
    width: "20%",
    borderRadius: "10px 10px 10px 10px",
    margin: "20px",
  },
  container: {
    padding: "1px 1px 1px 2px",
  },
  noPassword: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  btn: {
    backgroundColor: "#03fcad",
    margin: "1rem",
    borderRadius: "10px 10px 10px 10px",
    padding: "1rem",
  },
  linkBtn: {
    color: "black",
  },
};

//   .card:hover {
//     box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
//   }

const Dashboard = () => {
  const { loading, data } = useQuery(QUERY_PASSWORDS);
  const passwords = data?.passwords || [];

  return (
    <main>
      <div>
        <button style={styles.btn}>
          <Link style={styles.linkBtn} to="/createPassword">
            Create Password
          </Link>
        </button>

        <div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <PasswordList passwords={passwords} />
          )}
        </div>
      </div>
      );
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <PasswordList passwords={passwords} />
        )}
      </div>
    </main>
  );
};

export default Dashboard;
