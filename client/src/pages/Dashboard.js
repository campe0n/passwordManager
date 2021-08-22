import React from "react";
import { useQuery } from "@apollo/client";

import PasswordList from "../components/PasswordList";
import PasswordForm from "../components/PasswordForm";

import { QUERY_PASSWORDS } from "../utils/queries";

const divCard = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
};

const card = {
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#3F51B5",
  boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  transition: "0.3s",
  width: "20%",
  borderRadius: "10px 10px 10px 10px",
  margin: "20px",
};

//   .card:hover {
//     box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
//   }

const container = {
  padding: "1px 1px 1px 2px",
};

const Dashboard = () => {
  const { loading, data } = useQuery(QUERY_PASSWORDS);
  const passwords = data?.passwords || [];

  return (
    <main>
      <div>
        <div>
          <button>Create password</button>
        </div>

        <div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <PasswordList passwords={passwords} />
          )}
        </div>
      </div>
    </main>
  );
};

{
  /* <div style={card}>
<div style={container}>
  <h4>
    <b>Social Media</b>
  </h4>
</div>
</div> */
}

export default Dashboard;
