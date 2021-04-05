const { GraphQLList } = require("graphql");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLNonNull } = graphql;
const { GraphQLInt } = require("graphql");
const Category = require("./Category");
GraphQLNonNull(GraphQLInt);
GraphQLNonNull(GraphQLString);

const OrderSchema = new GraphQLObjectType({
  name: "Order",
  description: "Order models",
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    title: {
      type: GraphQLNonNull(GraphQLString),
    },
    image: {
      type: GraphQLNonNull(GraphQLString),
    },
    categories: {
      type: GraphQLList(Category),
    },
    price: {
      type: GraphQLNonNull(GraphQLInt),
    },
    weight: {
      type: GraphQLNonNull(GraphQLString),
    },
    quantity: {
      type: GraphQLNonNull(GraphQLInt),
    },
    total: {
      type: GraphQLNonNull(GraphQLInt),
    },
    type: {
      type: GraphQLNonNull(GraphQLInt) /**@change#3 -> to product Type */,
    },
  }),
});

module.exports = OrderSchema;
