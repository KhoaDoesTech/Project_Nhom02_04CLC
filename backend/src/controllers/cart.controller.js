'use strict';

const { OK } = require('../helpers/success.response');
const CartService = require('../services/cart.service');

class CartController {
  addToCart = async (req, res, next) => {
    new OK({
      message: 'Create Cart success',
      metadata: await CartService.addToCart({
        userId: req.user.userId,
        productInfo: req.body,
      }),
    }).send(res);
  };

  updateCart = async (req, res, next) => {
    new OK({
      message: 'Update Cart success',
      metadata: await CartService.addToCartV2({
        userId: req.user.userId,
        shopOrder: req.body,
      }),
    }).send(res);
  };

  deleteCart = async (req, res, next) => {
    new OK({
      message: 'Delete Cart success',
      metadata: await CartService.deleteUserCart({
        userId: req.user.userId,
        productId: req.body.productId,
      }),
    }).send(res);
  };

  listCart = async (req, res, next) => {
    new OK({
      message: 'List Cart success',
      metadata: await CartService.getListUserCart({ userId: req.user.userId }),
    }).send(res);
  };
}

module.exports = new CartController();
