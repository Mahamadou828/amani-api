const { GraphQLList } = require("graphql");
const { GraphQLNonNull } = require("graphql");
const { GraphQLString } = require("graphql");
const createProductSamples = require("../../common/product");
const { getRelatedItems } = require("../../helpers/filter");
const { ProductSchema } = require("../schema/Product");

const items = createProductSamples();

const getProductWithRelatedProducts = {
  type: ProductSchema,
  args: {
    slug: {
      type: GraphQLNonNull(GraphQLString),
    },
    type: {
      type: GraphQLString,
    },
  },
  async resolve(_, { slug, type }) {
    const relatedItem = await getRelatedItems(slug, type, items);
    return relatedItem;
  },
};

const getRelatedProducts = {
  type: new GraphQLList(ProductSchema),
  args: {
    slug: {
      type: GraphQLNonNull(GraphQLString),
    },
    type: {
      type: GraphQLString,
    },
  },
  async resolve(_, { slug, type }) {
    const relatedItem = await getRelatedItems(slug, type, items);
    return relatedItem;
  },
};

const getProduct = {
  type: ProductSchema,
  args: {
    slug: {
      type: GraphQLString,
    },
  },
  async resolve(_, args) {
    return await items.find((item) => item.slug === args.slug);
  },
};

module.exports = {
  getProductWithRelatedProducts,
  getRelatedProducts,
  getProduct,
};
