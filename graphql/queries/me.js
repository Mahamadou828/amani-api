const { GraphQLString } = require("graphql");
const loadUsers = require("../../common/user");
const UserSchema = require("../schema/User");

const items = loadUsers();

const me = {
  type: UserSchema,
  args: {
    id: {
      type: GraphQLString,
    },
  },
  resolve() {
    return items[0];
  },
};

module.exports = {
  me,
};
