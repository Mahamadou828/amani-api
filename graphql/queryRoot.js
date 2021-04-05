const graphql = require("graphql");
const { GraphQLObjectType } = graphql;

const { getCategories } = require("./queries/category");
const { getUser } = require("./queries/customer");
const { me } = require("./queries/me");
const { getRelatedProducts, getProduct } = require("./queries/product");
const { getProducts } = require("./queries/products");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  description: "Root for all query",
  fields: () => ({
    categories: getCategories,
    getUser,
    relatedProducts: getRelatedProducts,
    product: getProduct,
    products: getProducts,
    me,
  }),
});

module.exports = RootQuery;
