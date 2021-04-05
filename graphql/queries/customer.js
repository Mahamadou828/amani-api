const loadUsers = require("../../common/user");
const UserSchema = require("../schema/User");

const items = loadUsers();

const getUser = {
  type: UserSchema,
  resolve() {
    return items[0];
  },
};

module.exports = {
  getUser,
};
