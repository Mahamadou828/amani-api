const graphql = require("graphql");
const { GraphQLObjectType } = graphql;

const { updateAddress, deleteAddress } = require("./mutation/address");
const { deletePaymentCard } = require("./mutation/card");
const { deleteContact, updateContact } = require("./mutation/contact");
const { applyCoupon } = require("./mutation/coupon");
const { updateMe } = require("./mutation/me");
const { addOrder, charge } = require("./mutation/order");

const MutationQuery = new GraphQLObjectType({
  name: "MutationQuery",
  description: "Content all mutate query request",
  fields: () => ({
    updateAddress,
    deleteAddress,
    deletePaymentCard,
    deleteContact,
    updateContact,
    applyCoupon,
    updateMe,
    addOrder,
    charge,
  }),
});

module.exports = MutationQuery;
