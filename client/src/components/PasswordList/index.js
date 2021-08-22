import React from "react";
import { Link } from "react-router-dom";

const PasswordList = (passwords) => {
  if (!passwords.length) {
    return <h3>No passwords yet</h3>;
  }

  return (
    <div>
      <div>
        {passwords &&
          passwords.map((password) => (
            <div key={password._id}>
              <div>
                <h4>
                  {password} <br />1
                </h4>

                <Link to={`/passwords/${password._id}`}>View Passwords</Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PasswordList;
