import React from "react";
import { Link } from "react-router-dom";

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

const Dashboard = (categories, title) => {
  const noPassword = {
    display: "flex",
    justifyContent: "space-evenly",
  };

  const btn = {
    backgroundColor: "#03fcad",
    margin: "1rem",
    borderRadius: "10px 10px 10px 10px",
    padding: "1rem",
  };

  const linkBtn = {
    color: "black"
  }

  if (!categories.length) {
    return (
      <div style={noPassword}>
        <div>
          <h2>You have No Passwords Yet!</h2>
        </div>

        <button style={btn}>
          <Link style={linkBtn} to="/createPassword">Create Password</Link>
        </button>
      </div>
    );
  }

  return (
    <div style={divCard}>
      <h2>Categories</h2>
      {categories &&
        categories.map((category) => (
          <div key={category._id} style={card}>
            <div style={container}>
              <h4>
                <b>{category.name}</b>
              </h4>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Dashboard;
