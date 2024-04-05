const { convertToObjectIdMongodb } = require('~/utils/misc');
const cartModel = require('../cart.model');

const createUserCart = async ({ userId, product }) => {
  const query = {
    cart_user_id: userId,
    cart_state: 'active',
  };

  const updateOrInsert = {
      $addToSet: {
        cart_products: product,
      },
    },
    options = { upsert: true, new: true };

  return await cartModel.findOneAndUpdate(query, updateOrInsert, options);
};

const updateUserCartQuantity = async ({ userId, product }) => {
  const { productId, quantity } = product;

  const query = {
      cart_user_id: convertToObjectIdMongodb(userId),
      'cart_products.productId': productId,
      cart_state: 'active',
    },
    updateSet = {
      $inc: {
        'cart_products.$.quantity': quantity,
      },
    },
    options = { upsert: true, new: true };

  return await cartModel.findOneAndUpdate(query, updateSet, options);
};

const findProductInCart = async ({ userId, productId }) => {
  return await cartModel.findOne({
    cart_user_id: convertToObjectIdMongodb(userId),
    'cart_products.productId': productId,
    cart_state: 'active',
  });
};

const findCartById = async (cartId) => {
  return await cartModel.findOne({
    cart_user_id: convertToObjectIdMongodb(cartId),
    cart_state: 'active',
  });
};

const deleteUserCart = async ({ userId, productId }) => {
  const query = {
      cart_user_id: convertToObjectIdMongodb(userId),
      cart_state: 'active',
    },
    updateSet = {
      $pull: {
        cart_products: {
          productId,
        },
      },
    };

  return await cartModel.updateOne(query, updateSet);
};

module.exports = {
  createUserCart,
  updateUserCartQuantity,
  findCartById,
  deleteUserCart,
  findProductInCart,
};
