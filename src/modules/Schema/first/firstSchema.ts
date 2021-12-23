import { gql } from "graphql-tag";

export default gql`
  type Book {
    id: ID
    title: String
    author: String
    genre: Genre
  }

  enum Genre {
    FICTION
    NONFICTION
  }

  extend type Query {
    NotBook: [Book]
  }
`;
