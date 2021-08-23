import { gql } from "@apollo/client";

export const QUERY_PASSWORDS = gql`
  query allProfiles {
    passwords {
      _id
      category
      website
      password
    }
  }
`;
