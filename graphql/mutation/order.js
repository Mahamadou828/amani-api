const { GraphQLString } = require("graphql");
const loadOrders = require("../../common/order");
const OrderSchema = require("../schema/Order");
const PaymentSchema = require("../schema/Payment");

const items = loadOrders();

const charge = {
  type: PaymentSchema,
  args: {
    paymentInput: {
      type: GraphQLString,
    },
  },
  resolve() {
    return {
      status: 200,
    };
  },
};

const addOrder = {
  type: OrderSchema,
  args: {
    orderInput: {
      type: GraphQLString,
    },
  },
  resolve() {
    return items[0];
  },
};

const orders = {
  type: PaymentSchema,
  resolve() {
    return items;
  },
};

const order = {
  type: PaymentSchema,
  resolve() {
    return items[0];
  },
};

module.exports = {
  addOrder,
  charge,
  orders,
  order,
};
