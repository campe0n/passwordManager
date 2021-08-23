import React from "react";
import { Link } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { QUERY_PASSWORDS } from "../utils/queries";

import PasswordList from "../components/PasswordList";

const styles = {
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
      </div>

      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <PasswordList
            passwords={passwords}
            title="Here is a list of your passwords..."
          />
        )}
      </div>
    </main>
  );
};

export default Dashboard;
