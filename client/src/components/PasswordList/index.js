import React from "react";
import { Link } from "react-router-dom";

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
};

const PasswordList = ({ passwords }) => {
  if (!passwords.length) {
    return <div>No passwords yet!</div>;
  }

  return (
    <div>
      <div style={styles.divCard}>
        {passwords &&
          passwords.map((password) => (
            <div key={password._id} style={styles.card}>
              <div style={styles.container}>
                <h4>{password.website}</h4>
                <h4>{password.password}</h4>
                <Link to={`passwords/${password._id}`}>
                  <button>Update</button>
                </Link>
                <button>Delete</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PasswordList;
