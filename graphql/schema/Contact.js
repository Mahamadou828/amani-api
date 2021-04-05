const graphql = require("graphql");
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLNonNull } = graphql;

const ContactSchema = new GraphQLObjectType({
  name: "Contact",
  description: "Contact models",
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    number: {
      type: GraphQLNonNull(GraphQLString),
    },
    type: {
      type: GraphQLNonNull(GraphQLString),
    },
  }),
});

module.exports = ContactSchema;
