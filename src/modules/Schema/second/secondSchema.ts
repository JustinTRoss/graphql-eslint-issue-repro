import { gql } from "graphql-tag";

export default gql`
  type Book {
    id: ID
    title: String
    author: String
  }

  extend enum Genre {
    SCIFI
  }

  extend type Query {
    books: [Book]
    book(id: String): Book
  }
`;
