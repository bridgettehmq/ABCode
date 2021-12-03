import { gql } from "@apollo/client";

export const ME = gql`
  query me {
    me {
      _id
      lastLogin
      username
      email
    }
  }
`;

export const QUERY_SINGLE_PAGE = gql `
  query single_page($pageId: ID!){
    page(pageId: $pageId) {
      _id 
      title
      h1
      paragraph1 
      paragraph2
    }
  }
  `;

export const QUERY_ALL_PAGES = gql `
  query all_pages{
    pages {
      _id 
      title
      h1
      paragraph1 
      paragraph2
    }
  }
`;
