const functions = require("firebase-functions");
const express = require("express");

// Construct a schema, using GraphQL schema language
const typeDefs = require("./schema/schema");

// Provide resolver functions for your schema fields
const resolvers = require("./resolvers/resolvers");

// Create GraphQL express server
const { ApolloServer } = require("apollo-server-express");

// Setup express cloud function
const app = express();
const server = new ApolloServer({ typeDefs, resolvers, playground: true, introspection: true });
server.applyMiddleware({ app, path: "/", cors: true });
exports.graphql = functions.https.onRequest(app);
