const express = require("express");
const GraphHTTP = require("express-graphql");
const schema = require("./graphql/schema");
const cors = require("cors");

const app = express();

app.use(cors());

// app.use('/graphql', JWTAuth);
app.use(
  "*",
  GraphHTTP((req) => ({
    schema: schema,
    pretty: true,
    graphiql: true,
    context: { req },
  }))
);

module.exports = app;
