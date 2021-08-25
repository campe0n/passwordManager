import { gql } from "@apollo/client";

export const QUERY_PASSWORD = gql`
  query singlePassword($passwordId: ID!) {
    password(passwordId: $passwordId) {
      _id
      website
      password
    }
  }
`;

export const QUERY_PASSWORDS = gql`
  query allProfiles {
    passwords {
      _id
      website
      password
    }
  }
`;
