import React from "react";
// import { Link } from "react-router-dom";

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

    if (!categories.length) {
        return <h3>You have No Passwords</h3>;
      }

      // <div>
      //   <button><Link>Create Password</Link></button>
      // </div>
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
