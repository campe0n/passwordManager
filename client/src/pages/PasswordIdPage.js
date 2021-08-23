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

  const passwords = data?.password || [];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <PasswordId passwords={passwords} />
    </div>
  );
};

export default PasswordIdPage;
