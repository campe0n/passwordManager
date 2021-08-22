import { gql } from "@apollo/client";

export const QUERY_PASSWORDS = gql`
  query allPasswords {
    passwords {
      category
      website
      password
    }
  }
`;
