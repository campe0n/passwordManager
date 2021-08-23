import { gql } from "@apollo/client";

export const QUERY_PASSWORDS = gql`
  query allProfiles {
    passwords {
      category
      website
      password
    }
  }
`;
