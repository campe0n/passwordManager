import React from "react";

const PasswordId = ({ passwords }) => {
  if (!passwords.length) {
    return <h3>No passwords yet</h3>;
  }

  return (
    <div>
      <div>
        {passwords &&
          passwords.map((password) => (
            <div key={password._id}>
              <h4>{password.website}</h4>
              <h4>{password.password}</h4>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PasswordId;
