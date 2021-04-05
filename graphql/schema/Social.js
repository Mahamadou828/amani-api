const graphql = require("graphql");
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLNonNull } = graphql;

const SocialSchema = new GraphQLObjectType({
  name: "Social",
  description: "Social models",
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    media: {
      type: GraphQLString,
    },
    profilLink: {
      type: GraphQLNonNull(GraphQLString),
    },
  }),
});

module.exports = SocialSchema;
