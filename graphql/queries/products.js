const { GraphQLString } = require("graphql");
const { GraphQLInt } = require("graphql");
const createProductSamples = require("../../common/product");
const { filterItems } = require("../../helpers/filter");
const { ProductResponse, ProductSchemaResponse } = require("../schema/Product");

const items = createProductSamples();

const getProducts = {
  type: ProductSchemaResponse,
  args: {
    limit: {
      type: GraphQLInt,
    },
    offset: {
      type: GraphQLInt,
    },
    type: {
      type: GraphQLString,
    },
    text: {
      type: GraphQLString,
    },
    category: {
      type: GraphQLString,
    },
  },
  resolve(_, args) {
    const total = items.length;
    const { offset, type, text, category } = args;
    let limit = args.limit;
    if (limit === 0) limit = 20;
    const filteredData = filterItems(
      items,
      limit,
      offset,
      text,
      type,
      category
    );
    return new ProductResponse({
      total: total,
      ...filteredData,
    });
  },
};

module.exports = {
  getProducts,
};
