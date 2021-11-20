import { gql } from "graphql-tag";
import firstSchema from "./modules/Schema/first";
import secondSchema from "./modules/Schema/second";

const linkSchema = gql`

  # Uncomment this to overwrite errors across files:

  # extend type NotQuery {
  #   test: String
  # }

  type Query {
    _: Boolean
  }
`;

export default [linkSchema, ...firstSchema, ...secondSchema];
