'use strict';

const { BadRequestError, NotFoundError } = require('~/helpers/error.response');
const {
  checkDiscountExists,
  createDiscountCode,
  findAllDiscountCode,
  deleteDiscountCode,
  updateDiscountUsage,
} = require('~/models/repositories/discount.repo');
const {
  findProductsByShopId,
  advancedSearch,
} = require('~/models/repositories/product.repo');
const { unGetSelectData, convertToObjectIdMongodb } = require('~/utils/misc');

class DiscountService {
  static async createDiscountCode(payload) {
    const {
      code,
      start_date,
      end_date,
      is_active,
      shopId,
      min_order_value,
      product_ids,
      applies_to,
      name,
      description,
      type,
      value,
      max_value,
      user_used,
      max_uses,
      uses_count,
      max_uses_per_user,
    } = payload;

    if (new Date() > new Date(end_date)) {
      throw new BadRequestError('Discount code has expired');
    }

    if (new Date(start_date) >= new Date(end_date)) {
      throw new BadRequestError('Start date must be before end date');
    }

    const foundDiscount = await checkDiscountExists({
      discountCode: code,
      shopId,
    });
    if (foundDiscount && foundDiscount.discount_is_active) {
      throw new BadRequestError('Discount exists!');
    }
    const newDiscount = await createDiscountCode({
      discount_name: name,
      discount_description: description,
      discount_code: code,
      discount_start_date: start_date,
      discount_end_date: end_date,
      discount_type: type,
      discount_value: value,
      discount_min_order_values: min_order_value || 0,
      discount_max_value: max_value,
      discount_max_uses: max_uses,
      discount_max_uses_per_user: max_uses_per_user,
      discount_is_active: is_active,
      discount_applies_to: applies_to,
      discount_product_ids: applies_to === 'all' ? [] : product_ids,
      discount_uses_count: uses_count,
      discount_users_used: user_used,
      discount_shop_id: shopId,
    });

    return newDiscount;
  }

  // Get all discount codes available with product (User)
  static async getAllDiscountCodesWithProduct({ discountCode, shopId, query }) {
    console.log(query, discountCode, shopId);
    const foundDiscount = await checkDiscountExists({ discountCode, shopId });

    if (!foundDiscount || !foundDiscount.discount_is_active) {
      throw new NotFoundError('Discount not exits!');
    }

    const { discount_applies_to, discount_product_ids } = foundDiscount;
    let products;
    // get all product
    if (discount_applies_to === 'all') {
      products = await findProductsByShopId({ product_shop: shopId, query });
    }

    // get the products with ids
    if (discount_applies_to === 'specific') {
      const condition = {
        _id: { $in: discount_product_ids },
        isPublished: true,
      };
      query = { ...query, ...condition };
      products = await advancedSearch(query);
    }

    return products;
  }

  // Get all discount code of Shop (Shop)
  static async getAllDiscountCodesByShop(shopId, query) {
    const unSelect = unGetSelectData(['__v', 'discount_shop_id']);
    const condition = {
      discount_shopId: convertToObjectIdMongodb(shopId),
      discount_is_active: true,
    };
    query = { ...query, ...condition };

    const discounts = findAllDiscountCode({
      select: unSelect,
      queryInput: query,
    });

    return discounts;
  }

  // Apply discount code
  static async getDiscountAmount({ discountCode, userId, shopId, products }) {
    const foundDiscount = await checkDiscountExists({ discountCode, shopId });
    if (!foundDiscount) throw new NotFoundError('Discount not exits!');

    const {
      discount_max_uses_per_user,
      discount_start_date,
      discount_end_date,
      discount_is_active,
      discount_max_uses,
      discount_min_order_values,
      discount_users_used,
      discount_type,
      discount_value,
      discount_max_value,
    } = foundDiscount;

    if (!discount_is_active) throw new NotFoundError('Discount not active!');
    if (!discount_max_uses) throw new NotFoundError('Discount are out!');

    if (
      new Date() < new Date(discount_start_date) ||
      new Date() > new Date(discount_end_date)
    ) {
      throw new BadRequestError('Discount code has expired');
    }

    let totalOrder = 0;
    if (discount_min_order_values > 0) {
      // get total
      totalOrder = products.reduce((acc, product) => {
        return acc + product.quantity * product.price;
      }, 0);

      if (totalOrder < discount_min_order_values) {
        throw new NotFoundError(
          `Discount requires a minimum order value of ${discount_min_order_values}`
        );
      }
    }

    if (discount_max_uses_per_user > 0) {
      const usersUsedDiscount = discount_users_used.find(
        (user) => user.userId == userId
      );
      console.log(usersUsedDiscount, discount_max_uses_per_user);
      if (usersUsedDiscount > discount_max_uses_per_user) {
        throw new BadRequestError(
          `Discount just used ${discount_max_uses_per_user}`
        );
      }
    }

    let amount = 0;
    if (discount_type === 'fixed_amount') {
      amount = discount_value;
    } else {
      amount = totalOrder * (discount_value / 100);
      amount = amount > discount_max_value ? discount_max_value : amount;
    }

    return {
      totalOrder,
      discount: amount,
      totalPrice: totalOrder - amount,
    };
  }

  static async deleteDiscountCode({ discountCode, shopId }) {
    return await deleteDiscountCode({ discountCode, shopId });
  }

  // Cancel discount code
  static async cancelDiscountCode({ discountCode, shopId, userId }) {
    const foundDiscount = await checkDiscountExists({ discountCode, shopId });
    if (!foundDiscount) throw new NotFoundError('Discount not exits!');

    if (!foundDiscount) throw new NotFoundError('Discount not exits!');

    const result = await updateDiscountUsage({
      discountId: foundDiscount._id,
      userId,
    });

    return result;
  }
}

module.exports = DiscountService;
