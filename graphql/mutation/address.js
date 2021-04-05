const { GraphQLString } = require("graphql");
const defaultUser = require("../../common/user");
const AddressSchema = require("../schema/Address");

const items = defaultUser();

const updateAddress = {
  type: AddressSchema,
  args: {
    addressInput: {
      type: GraphQLString,
    },
  },
  resolve() {
    return items[0];
  },
};

const deleteAddress = {
  type: AddressSchema,
  args: {
    addressId: {
      type: GraphQLString,
    },
  },
  resolve() {
    return items[0];
  },
};

module.exports = {
  updateAddress,
  deleteAddress,
};
