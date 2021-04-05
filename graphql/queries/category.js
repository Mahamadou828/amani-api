const { GraphQLInt } = require("graphql");
const { GraphQLString, GraphQLList } = require("graphql");
const loadCategories = require("../../common/category");
const CategorySchema = require("../schema/Category");

const items = loadCategories();

const getCategories = {
  type: new GraphQLList(CategorySchema),
  args: {
    type: {
      type: GraphQLString,
    },
  },
  resolve(_, { type }) {
    const result = items.filter((item) => item.type === type);
    return result;
  },
};

const getCategorie = {
  type: CategorySchema,
  args: {
    id: {
      type: GraphQLInt,
    },
  },
  resolve(_, { id }) {
    return items.find((item) => item.id === id);
  },
};

module.exports = {
  getCategories,
  getCategorie,
};
