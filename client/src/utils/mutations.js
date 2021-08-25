import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
      }
    }
  }
`;

export const ADD_PASSWORD = gql `
   mutation addPassword($website: String!, $password: String!){
     addPassword(website: $website, password: $password) {
         website
         password
     }
   }
   `;


export const UPDATE_PASSWORD = gql `
   mutation updatePassword($website: String!, $password: String!){
     updatePassword(website: $website, password: $password) {
         website
         password
     }
   }
   `;


   export const DELETE_PASSWORD = gql `
   mutation deletePassword($website: String!, $password: String!){
     deletePassword(website: $website, password: $password) {
         website
         password
     }
   }
   `;