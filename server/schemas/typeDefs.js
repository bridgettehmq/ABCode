const { gql } = require("apollo-server-express");

const typeDefs = gql`
  "Unix time stamp in milliseconds."
  scalar Date

  type User {
    _id: ID!
    username: String!
    email: String!
    pages: [Page]
  }

  type Page {
    pageId: ID!
    title: String!
    h1: String! 
    paragraph1: String! 
    paragraph2: String
    image: String
  }

  input PageInput {
    title: String! 
    h1: String! 
    paragraph1: String!
    paragraph2: String! 
    image: String

  }
  
  type Query {
    "Find the logged in user."
    me: User
    #page: [Page]!
    #pages(pageId: ID!): Page 
  }

  type Mutation {
    createUser(email: String!, password: String!, username: String!): Auth
    login(email: String!, password: String!): Auth
    #updatePage(pageId: pageId!): User
    savePage(input: PageInput!): User
    removePage(pageId: ID!): User
  }

  type Auth {
    token: String!
    user: User!
  }

`;

module.exports = typeDefs;
