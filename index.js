const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const config = require("./gql/config");
const { connectMongo } = require("./db/mongodb");

const app = express();
const PORT = process.env.PORT || 5000;

// middlewares;
app.use(express.json());

const startServer = async () => {
  try {
    const apolloServer = new ApolloServer(config);
    await apolloServer.start();
    app.use("/graphql", expressMiddleware(apolloServer));
    await connectMongo();
    app.listen(PORT, console.log(`Server is listening at PORT=${PORT}`));
  } catch (err) {
    console.log("Issue in starting Server");
    console.log(err.message);
  }
};

startServer();
