import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation CreateUser($email: String!, $password: String!, $username: String!) {
    createUser(email: $email, password: $password, username: $username) {
      token
    }
  }
`;

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const ADD_PAGE = gql `
mutation SavePage($input: PageInput!) {
  savePage(input: $input) {
    _id
    username
    email
    pages {
      pageId
      title
      h1
      paragraph1
      paragraph2
      image
    }
  }
}
  `

export const REMOVE_PAGE = gql `
  mutation removePage($pageId: ID!) {
    removePage(pageId: $pageId) {
      pages {
        pageId
        title
        h1
        paragraph1
        paragraph2
      }
    }
  }
`