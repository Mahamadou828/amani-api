const graphql = require("graphql");
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLNonNull } = graphql;

const AddressSchema = new GraphQLObjectType({
  name: "Address",
  description: "Address models",
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    type: {
      type: GraphQLNonNull(GraphQLString),
    },
    name: {
      type: GraphQLNonNull(GraphQLString),
    },
    info: {
      type: GraphQLString,
    },
  }),
});

module.exports = AddressSchema;
