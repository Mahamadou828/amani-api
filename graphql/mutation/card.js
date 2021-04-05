const { GraphQLString } = require("graphql");
const loadUsers = require("../../common/user");
const CardSchema = require("../schema/Card");

const items = loadUsers();

const deletePaymentCard = {
  type: CardSchema,
  args: {
    cardId: {
      type: GraphQLString,
    },
  },
  resolve() {
    return items[0];
  },
};

const addPaymentCard = {
  type: CardSchema,
  args: {
    cardInput: {
      type: GraphQLString,
    },
  },
  resolve() {
    return items[0];
  },
};

module.exports = {
  deletePaymentCard,
  addPaymentCard,
};
