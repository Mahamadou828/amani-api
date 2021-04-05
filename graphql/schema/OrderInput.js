const graphql = require("graphql");
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLNonNull } = graphql;
const { GraphQLInt } = require("graphql");

const OrderInputSchema = new GraphQLObjectType({
  name: "OrderInput",
  description: "OrderInput models",
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    address: {
      type: GraphQLNonNull(GraphQLString),
    },
    contact: {
      type: GraphQLString,
    },
    payment: {
      type: GraphQLNonNull(GraphQLString),
    },
    schedule: {
      type: GraphQLNonNull(GraphQLString),
    },
    quantity: {
      type: GraphQLNonNull(GraphQLInt),
    },
    price: {
      type: GraphQLNonNull(GraphQLInt),
    },
    products: {
      /**@change#1 */ type: GraphQLNonNull(GraphQLInt),
    },
  }),
});

module.exports = OrderInputSchema;
