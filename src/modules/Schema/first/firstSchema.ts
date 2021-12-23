import { gql } from "graphql-tag";

export default gql`
  type Book {
    id: ID
    title: String
    author: String
  }

  enum Genre {
    FICTION
    NONFICTION
  }

  extend type Query {
    NotBook: [Book]
  }
`;
