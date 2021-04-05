const graphql = require("graphql");
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLNonNull } = graphql;
const { GraphQLInt } = require("graphql");

const CardSchema = new GraphQLObjectType({
  name: "Card",
  description: "Card models",
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    type: {
      type: GraphQLNonNull(GraphQLString),
    },
    name: {
      type: GraphQLString,
    },
    cardType: {
      type: GraphQLNonNull(GraphQLString),
    },
    lastFourDigit: {
      type: GraphQLNonNull(GraphQLInt),
    },
  }),
});

module.exports = CardSchema;
