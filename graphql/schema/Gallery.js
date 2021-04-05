const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = graphql;

const GallerySchema = new GraphQLObjectType({
  name: "Gallery",
  description: "Gallery models",
  fields: () => ({
    url: {
      type: GraphQLNonNull(GraphQLString),
    },
  }),
});

module.exports = GallerySchema;
