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
    website: String
    password: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
    passwords: [Password]
feature/addreadme
    findPasswordById(_id: ID!): Password
    password: Password

    password: Password
    me: User
 develop
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

feature/addreadme
    login(
      email: String!, 

    login(email: String!, password: String!): Auth

    addPassword(_id: ID, website: String!, password: String!): Password

    updatePassword(
      _id: ID
      category: String!
      website: String!
develop
      password: String!
    ): Password

 feature/addreadme
    addPassword(
      _id: ID
      category: String!
      website: String!
      password: String!
    ): Password

    updatePassword(
      _id: ID
      website: String!
      password: String!
    ): Password

 develop
    deletePassword(
      _id: ID
      website: String!
      password: String!
    ): Password
  }
`;

module.exports = typeDefs;
