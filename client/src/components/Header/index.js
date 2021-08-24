import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";

const header = {
  backgroundColor: "#3F51B5",
  margin: "0 auto"

  
};


const title = {
  display: "flex",
  justifyContent: "center",
  color: "white",
  paddingTop: "10px",
  fontFamily: "Arial"
  
};

const divBtn = {
  display: "flex",
  justifyContent: "center"
};

const btn = {
  backgroundColor: "#3F51B5",
  margin: "3rem",
  borderRadius: "10px 10px 10px 10px",
  padding: ".5rem",
  
};

const logoutBtn = {
    backgroundColor: "#3F51B5",
    color: "white",
    fontSize: "25px",
    margin: "3rem",
    borderRadius: "10px 10px 10px 10px",
    padding: ".5rem",  
}

const linkBtn = {
  color: "white",
  fontSize: "30px",
  textDecoration: "none",
};

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header style={header}>
      <h1 style={title}>Password Manager</h1>
      <div style={divBtn}>
        {Auth.loggedIn() ? (
          <button style={logoutBtn} onClick={logout}>
            Logout
          </button>
        ) : (
          <>
            <button style={btn}>
              <Link style={linkBtn} to="/login">
                Login
              </Link>
            </button>
            <button style={btn}>
              <Link style={linkBtn} to="/signup">
                Signup
              </Link>
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
