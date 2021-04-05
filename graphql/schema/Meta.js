const { GraphQLList } = require("graphql");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = graphql;

const MetaSchema = new GraphQLObjectType({
  name: "Meta",
  description: "Meta models",
  fields: () => ({
    publisher: {
      type: GraphQLString,
    },
    isbn: {
      type: GraphQLNonNull(GraphQLString),
    },
    edition: {
      type: GraphQLNonNull(GraphQLString),
    },
    country: {
      type: GraphQLString,
    },
    languages: {
      type: new GraphQLList(GraphQLString),
    },
    numberOfReader: {
      type: GraphQLNonNull(GraphQLString),
    },
    numberOfPage: {
      type: GraphQLNonNull(GraphQLString),
    },
    samplePDF: {
      type: GraphQLString,
    },
  }),
});

module.exports = MetaSchema;
