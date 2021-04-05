const { GraphQLString } = require("graphql");
const loadUsers = require("../../common/user");
const ContactSchema = require("../schema/Contact");

const items = loadUsers();

const deleteContact = {
  type: ContactSchema,
  args: {
    contactId: {
      type: GraphQLString,
    },
  },
  resolve() {
    return items[0];
  },
};

const updateContact = {
  type: ContactSchema,
  args: {
    contactInput: {
      type: GraphQLString,
    },
  },
  resolve() {
    return items[0];
  },
};

module.exports = {
  deleteContact,
  updateContact,
};
