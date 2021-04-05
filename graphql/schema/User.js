const { GraphQLID } = require("graphql");
const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLString,

  GraphQLNonNull,
} = graphql;
const AddressSchema = require("./Address");
const CardSchema = require("./Card");
const ContactSchema = require("./Contact");

const UserSchema = new GraphQLObjectType({
  name: "User",
  description: "User models",
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    token: {
      type: GraphQLNonNull(GraphQLString),
    },
    name: {
      type: GraphQLNonNull(GraphQLString),
    },
    email: {
      type: GraphQLNonNull(GraphQLString),
    },
    address: {
      type: AddressSchema,
    },
    contact: {
      type: GraphQLNonNull(ContactSchema),
    },
    card: {
      type: GraphQLNonNull(CardSchema),
    },
  }),
});

module.exports = UserSchema;
