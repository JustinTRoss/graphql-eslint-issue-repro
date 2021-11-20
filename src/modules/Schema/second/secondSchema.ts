import { gql } from "graphql-tag";

export default gql`
  type Book {
    id: ID
    title: String
    author: Boolean
  }

  extend type Query {
    books: [Book]
    book(id: String): Book
  }
`;
