import { gql } from "graphql-tag";

export default gql`
  type Book {
    id: ID
    title: String
    author: String
    spine: String
    spine: Boolean
  }

  extend enum Genre {
    SCIFI
  }

  extend type Query {
    books: [Book]
    book(id: String): Book
  }
`;
