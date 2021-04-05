const graphql = require("graphql");
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLNonNull } = graphql;
const { GraphQLInt } = require("graphql");

const OrderSchema = new GraphQLObjectType({
  name: "Order",
  description: "Order models",
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    userId: {
      type: GraphQLNonNull(GraphQLInt),
    },
    products: {
      /**@change#2 -> to OrderProducts */ type: GraphQLNonNull(GraphQLInt),
    },
    status: {
      type: GraphQLNonNull(GraphQLInt),
    },
    deliveryTime: {
      type: GraphQLNonNull(GraphQLString),
    },
    amount: {
      type: GraphQLNonNull(GraphQLInt),
    },
    subtotal: {
      type: GraphQLNonNull(GraphQLInt),
    },
    discount: {
      type: GraphQLNonNull(GraphQLInt),
    },
    deliveryFee: {
      type: GraphQLNonNull(GraphQLInt),
    },

    deliveryAddress: {
      type: GraphQLNonNull(GraphQLString),
    },
    date: {
      type: GraphQLNonNull(GraphQLString),
    },
  }),
});

module.exports = OrderSchema;
