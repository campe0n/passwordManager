import React from "react";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_PASSWORD } from "../utils/queries";
import PasswordId from "../components/PasswordId";

const PasswordIdPage = () => {
  const { passwordId } = useParams();
  const { loading, data } = useQuery(QUERY_PASSWORD, {
    variables: { passwordId: passwordId },
  });

  const passwords = data?.passwords || [];

  return (
    <div>
      {loading ? <div>Loading...</div> : <PasswordId passwords={passwords} />}
    </div>
  );
};

export default PasswordIdPage;
