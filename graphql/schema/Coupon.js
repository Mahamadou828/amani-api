const graphql = require("graphql");
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLNonNull } = graphql;
const { GraphQLInt } = require("graphql");

const CouponSchema = new GraphQLObjectType({
  name: "Coupon",
  description: "Coupon models",
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    code: {
      type: GraphQLNonNull(GraphQLString),
    },
    image: {
      type: GraphQLString,
    },
    discountInPercent: {
      type: GraphQLNonNull(GraphQLInt),
    },
  }),
});

module.exports = CouponSchema;
