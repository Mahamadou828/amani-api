const { GraphQLString } = require("graphql");
const loadCoupons = require("../../common/coupon");
const CouponSchema = require("../schema/Coupon");

const items = loadCoupons();

const applyCoupon = {
  type: CouponSchema,
  args: {
    code: {
      type: GraphQLString,
    },
  },
  resolve(_, { code }) {
    const coupon = items.find(
      (item) => item.code.toLowerCase() === code.toLowerCase()
    );

    if (coupon) {
      return coupon;
    }
    return {
      id: 0,
      code: "DEFAULT_COUPON",
      discountInPercent: 0,
    };
  },
};

module.exports = {
  applyCoupon,
};
