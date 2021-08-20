import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const ADD_PROFILE = gql`
  mutation addProfile($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addProfile(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;