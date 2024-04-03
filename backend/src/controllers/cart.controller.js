'use strict';

const { OK } = require('../helpers/success.response');
const CartService = require('../services/cart.service');

class CartController {
  addToCart = async (req, res, next) => {
    new OK({
      message: 'Create Cart success',
      metadata: await CartService.addToCart(req.body),
    }).send(res);
  };

  updateCart = async (req, res, next) => {
    new OK({
      message: 'Update Cart success',
      metadata: await CartService.addToCartV2(req.body),
    }).send(res);
  };

  deleteCart = async (req, res, next) => {
    new OK({
      message: 'Delete Cart success',
      metadata: await CartService.deleteUserCart(req.body),
    }).send(res);
  };

  listCart = async (req, res, next) => {
    new OK({
      message: 'List Cart success',
      metadata: await CartService.getListUserCart(req.query),
    }).send(res);
  };
}

module.exports = new CartController();
