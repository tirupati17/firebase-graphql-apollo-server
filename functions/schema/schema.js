const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Contact {
    favorite: Boolean
    first_name: String
    last_name: String
    profile_pic: String
    url: String
    id: ID!
  }
  type Query {
    contacts: [Contact]
  }
  type Mutation {
    addContact: String
  }
`;

module.exports = typeDefs;