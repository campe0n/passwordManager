import React from "react";
import { useQuery } from "@apollo/client";

import { QUERY_PASSWORDS } from "../utils/queries";
import PasswordId from "../components/PasswordId";

const PasswordIdPage = () => {
  const { loading, data } = useQuery(QUERY_PASSWORDS);
  const passwords = data?.passwords || [];

  return (
    <div>
      {loading ? <div>Loading...</div> : <PasswordId passwords={passwords} />}
    </div>
  );
};

export default PasswordIdPage;
