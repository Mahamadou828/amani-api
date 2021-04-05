const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
} = graphql;
const { GraphQLInt } = require("graphql");

const CategorySchema = new GraphQLObjectType({
  name: "Category",
  description: "Category models",
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    title: {
      type: GraphQLString,
    },
    type: {
      type: GraphQLNonNull(GraphQLString),
    },
    icon: {
      type: GraphQLString,
    },
    slug: {
      type: GraphQLNonNull(GraphQLString),
    },
    itemCount: {
      type: GraphQLNonNull(GraphQLInt),
    },
    children: {
      type: new GraphQLList(CategorySchema),
    },
  }),
});

module.exports = CategorySchema;
