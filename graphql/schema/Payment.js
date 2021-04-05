const graphql = require("graphql");
const { GraphQLObjectType, GraphQLNonNull } = graphql;
const { GraphQLInt } = require("graphql");

const PaymentSchema = new GraphQLObjectType({
  name: "Payment",
  description: "Payment models",
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLInt),
    },
  }),
});

module.exports = PaymentSchema;
