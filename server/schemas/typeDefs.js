const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    passwords: [Password]
  }

  type Password {
    _id: ID
    category: String!
    website: String!
    password: String!
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
    passwords: [Password]
    password(_id: ID!): Password
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth


    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User

    login(
      email: String! 
      password: String!
      ): Auth

    addPassword(
      category: String!
      website: String!
      password: String!
    ): Password
  }
`;

module.exports = typeDefs;
