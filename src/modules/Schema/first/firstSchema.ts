import { gql } from "graphql-tag";

export default gql`
  type NOT_A_Book {
    id: ID
    title: String
    author: Boolean
  }

  extend type Query {
    NotBook: [NOT_A_Book]
  }
`;
