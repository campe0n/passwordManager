import { Link } from "react-router-dom";

const PasswordList = ({ passwords }) => {
  if (!passwords.length) {
    return <div>No passwords yet!</div>;
  }

  return (
    <div>
      <div>
        {passwords &&
          passwords.map((password) => {
            <div key={password._id}>
              <h4>{password.website}</h4>
              <h4>{password.password}</h4>
              <Link to={`passwords/${password._id}`}>
                Click to view, update or delete password.
              </Link>
            </div>;
          })}
      </div>
    </div>
  );
};

export default PasswordList;
