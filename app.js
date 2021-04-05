const express = require("express");
const GraphHTTP = require("express-graphql");
const schema = require("./graphql/schema");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOptions));

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
