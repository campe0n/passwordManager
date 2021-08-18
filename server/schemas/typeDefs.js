const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    passwords: [Passwords]
  }

  type Passwords {
    _id: ID
    category: String
    website: String
    password: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
    passwords: [Passwords]
    password(_id: ID!): Passwords
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): User
    updateUser(
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    login(email: String!, password: String!): Auth
    addPassword(
      category: String!
      website: String!
      password: String!
    ): Passwords
  }
`;

module.exports = typeDefs;
