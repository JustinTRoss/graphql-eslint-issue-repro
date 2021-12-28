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

  union Product
  {
    name: String
  } || Book

  extend type Query {
    NotBook: [Book]
  }
`;
