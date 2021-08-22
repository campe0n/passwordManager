import React, { useState } from "react";
import { useMutation } from "@apollo/client";

import { ADD_PASSWORD } from "../../utils/mutations";
import { QUERY_PASSWORDS } from "../../utils/queries";

const PasswordForm = () => {
  const [addPassword, { error }] = useMutation(ADD_PASSWORD, {
    update(cache, { data: { addPassword } }) {
      try {
        const { passwords } = cache.readQuery({ query: QUERY_PASSWORDS });

        cache.writeQuery({
          query: QUERY_PASSWORDS,
          data: { passwords: [...passwords, addPassword] },
        });
      } catch (error) {
        console.error(error);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addPassword();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h3>Add a password</h3>
      <form>
        <div>
          <input placeholder="Add your password..." />
        </div>

        <div>
          <button type="submit">Add Password</button>
        </div>
        {error && <div>Something went wrong...</div>}
      </form>
    </div>
  );
};

export default PasswordForm;
