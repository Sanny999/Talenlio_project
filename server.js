const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const fs = require('fs');
const path = require('path');

// Read the schema file
const schemaPath = path.resolve(__dirname, 'schema.graphql');
const typeDefs = fs.readFileSync(schemaPath, 'utf8');

// Your resolver definitions
const resolvers = require('./resolvers');

async function startServer() {
  const app = express();
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start(); // Ensure server is started before applying middleware
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;

  app.listen(PORT, () => {
    console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startServer().catch(error => {
  console.error('Error starting server:', error);
});


