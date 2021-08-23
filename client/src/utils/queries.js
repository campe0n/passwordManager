import { gql } from "@apollo/client";

export const QUERY_PASSWORD = gql`
  query singlePassword($passwordId: ID!) {
    password(passwordId: $passwordId) {
      _id
      category
      website
      password
    }
  }
`;
