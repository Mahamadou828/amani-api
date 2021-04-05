const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLString,

  GraphQLNonNull,
} = graphql;
const { GraphQLInt } = require("graphql");

const PaymentInputSchema = new GraphQLObjectType({
  name: "PaymentInput",
  description: "PaymentInput models",
  fields: () => ({
    token: {
      type: GraphQLNonNull(GraphQLString),
    },
    amount: {
      type: GraphQLNonNull(GraphQLInt),
    },
  }),
});

module.exports = PaymentInputSchema;
