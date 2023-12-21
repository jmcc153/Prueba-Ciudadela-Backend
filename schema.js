import { gql } from "apollo-server";


export const typeDefs = gql`
type Character {
  id: ID!
  name: String!
  status: String!
  species: String!
  image: String!
}

type info {
  count: Int!
  pages: Int!
  next: String
  prev: String
}

type Query {
  characters(page: Int): [Character]!
  character(id: ID!): Character
  info: info
}
`;

