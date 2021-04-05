const { GraphQLList } = require("graphql");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLNonNull } = graphql;
const SocialSchema = require("./Social");

const AuthorSchema = new GraphQLObjectType({
  name: "Author",
  description: "Author models",
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    avatar: {
      type: GraphQLNonNull(GraphQLString),
    },
    bio: {
      type: GraphQLNonNull(GraphQLString),
    },
    email: {
      type: GraphQLString,
    },
    website: {
      type: GraphQLString,
    },
    socials: {
      type: new GraphQLList(SocialSchema),
    },
  }),
});

module.exports = AuthorSchema;
