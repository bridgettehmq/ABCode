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

// THIS IS A TEST QUERY TO SEE IF ZACK IS ABLE TO POPULATE THE MY PAGES PAGE WITH EITHER THIS QUERY OR QUERY_ALL_PAGES
export const TEST_QUERY = gql `
  query testMe {
    me {
      pages {
        pageId
        title
        h1
        paragraph1
        paragraph2
      }
    }
  }`;