'use strict';

const {
  findCartById,
  createUserCart,
  updateUserCartQuantity,
  deleteUserCart,
  findProductInCart,
} = require('~/models/repositories/cart.repo');
const { NotFoundError } = require('../helpers/error.response');
const { getProductById } = require('./product.service');

class CartService {
  /**
   * Adds a product to the user's cart.
   *
   * @param {Object} options - The options for adding a product to the cart.
   * @param {string} options.userId - The ID of the user.
   * @param {Object} [options.product={}] - The product to be added to the cart.
   * @returns {Promise} A promise that resolves to the updated cart.
   */
  static async addToCart({ userId, productInfo = {} }) {
    const { product } = productInfo;
    // check cart exist
    const foundCart = await findCartById(userId);

    if (!foundCart) {
      // create cart for user
      return await createUserCart({ userId, product });
    }

    // If have cart but not have product
    if (!foundCart.cart_products.length) {
      foundCart.cart_products = [product];
      return await foundCart.save();
    }

    const foundProduct = await findProductInCart({
      userId,
      productId: product.productId,
    });
    if (!foundProduct) return await createUserCart({ userId, product });

    // Have product
    return await updateUserCartQuantity({ userId, product });
  }

  // update cart
  /**
    "shop_order_ids": [
      {
        shopId: ,
        item_products: [
            {
                quantity,
                price,
                shopId,
                old_quantity,
                productId
            }
        ]
        version
      }
    ]
  */
  static async addToCartV2({ userId, shopOrder = {} }) {
    const { shop_order_ids } = shopOrder;
    const { productId, quantity, old_quantity } =
      shop_order_ids[0]?.item_products[0] ?? {};

    const foundProduct = await getProductById(productId);
    if (!foundProduct) throw new NotFoundError('Not found product');
    console.log(foundProduct);
    if (foundProduct.product_shop.toString() !== shop_order_ids[0]?.shopId)
      throw new NotFoundError('Product do not belong to the shop');

    if (quantity === 0) {
      // deleted

      return await deleteUserCart({ userId, productId });
    }

    return await updateUserCartQuantity({
      userId,
      product: {
        productId,
        quantity: quantity - old_quantity,
      },
    });
  }

  static async deleteUserCart({ userId, productId }) {
    return await deleteUserCart({ userId, productId });
  }

  static async getListUserCart({ userId }) {
    return await findCartById(userId);
  }
}

module.exports = CartService;
