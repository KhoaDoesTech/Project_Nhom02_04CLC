'use strict';

const QueryFeatures = require('~/utils/query.util');
const discountModel = require('../discount.model');
const { convertToObjectIdMongodb } = require('~/utils/misc');

const findAllDiscountCode = async ({ select, queryInput }) => {
  const documents = new QueryFeatures(
    discountModel.sort({ _id: 1 }).select(select),
    queryInput
  )
    .limitFields()
    .paging();

  return await documents.query.lean();
};

const checkDiscountExists = async ({ discountCode, shopId }) => {
  return await discountModel
    .findOne({
      discount_code: discountCode,
      discount_shop_id: convertToObjectIdMongodb(shopId),
    })
    .lean();
};

const createDiscountCode = async (payload) => {
  return await discountModel.create(payload);
};

const deleteDiscountCode = async ({ discountCode, shopId }) => {
  return await discountModel.findOneAndDelete({
    discount_code: discountCode,
    discount_shopId: convertToObjectIdMongodb(shopId),
  });
};

const updateDiscountUsage = async ({ discountId, userId }) => {
  return await discountModel.findByIdAndUpdate(discountId, {
    $pull: {
      discount_users_used: convertToObjectIdMongodb(userId),
    },
    $inc: {
      discount_max_uses: 1,
      discount_uses_count: -1,
    },
  });
};

module.exports = {
  findAllDiscountCode,
  checkDiscountExists,
  createDiscountCode,
  deleteDiscountCode,
  updateDiscountUsage,
};
