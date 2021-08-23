import React from "react";

import { Link } from "react-router-dom";

const PasswordList = ({ passwords }) => {
  if (!passwords.length) {
    return <h3>No passwords yet</h3>;
  }

  return (
    <div>
      <h3>{passwords.website}</h3>
      <div>
        {passwords &&
          passwords.map((password) => (
            <div key={password._id}>
              <h4>{password.website}</h4>
              <h4>{password.password}</h4>
              <Link to={`passwords/${password._id}`}>View password.</Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PasswordList;
