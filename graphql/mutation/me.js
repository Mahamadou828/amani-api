const { GraphQLString } = require("graphql");
const loadUsers = require("../../common/user");
const UserSchema = require("../schema/User");

const items = loadUsers();

const updateMe = {
  type: UserSchema,
  args: {
    meInput: {
      type: GraphQLString,
    },
  },
  resolve() {
    return items[0];
  },
};

module.exports = {
  updateMe,
};
