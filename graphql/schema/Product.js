const PaginatedResponse = require("../../helpers/paginated-response");
const { GraphQLList } = require("graphql");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLNonNull } = graphql;
const { GraphQLInt } = require("graphql");
const CategorySchema = require("./Category");
const GallerySchema = require("./Gallery");
const { GraphQLBoolean } = require("graphql");
const AuthorSchema = require("./Author");
const MetaSchema = require("./Meta");
const { GraphQLFloat } = require("graphql");

const ProductSchema = new GraphQLObjectType({
  name: "Product",
  description: "Product models",
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    slug: {
      type: GraphQLNonNull(GraphQLString),
    },
    title: {
      type: GraphQLNonNull(GraphQLString),
    },
    type: {
      type: GraphQLString,
    },
    categories: {
      type: GraphQLList(CategorySchema),
      resolve() {
        return []; /**@change#5 -> retrieve all category */
      },
    },
    unit: {
      type: GraphQLNonNull(GraphQLString),
    },
    image: {
      type: GraphQLNonNull(GraphQLString),
    },
    gallery: {
      type: GraphQLList(GallerySchema),
      resolve() {
        return []; /**@change#6 -> retrieve all galerie */
      },
    },
    description: {
      type: GraphQLNonNull(GraphQLString),
    },
    price: {
      type: GraphQLNonNull(GraphQLFloat),
    },
    salePrice: {
      type: GraphQLNonNull(GraphQLFloat),
    },
    discountInPercent: {
      type: GraphQLNonNull(GraphQLFloat),
    },
    author: {
      type: AuthorSchema,
    },
    meta: {
      type: MetaSchema,
    },
    createdAt: {
      type: GraphQLNonNull(GraphQLString),
    },
  }),
});

class ProductResponse extends PaginatedResponse(ProductSchema) {
  // simple helper for creating new instances easily
  constructor(productResponse) {
    super();
    Object.assign(this, productResponse);
  }

  // you can add more fields here if you need
}

const ProductSchemaResponse = new GraphQLObjectType({
  name: "productResponse",
  description: "asdasda",
  fields: () => ({
    hasMore: {
      type: GraphQLNonNull(GraphQLBoolean),
    },
    total: {
      type: GraphQLNonNull(GraphQLInt),
    },
    items: {
      type: new GraphQLList(ProductSchema),
    },
  }),
});

module.exports = { ProductSchema, ProductResponse, ProductSchemaResponse };
