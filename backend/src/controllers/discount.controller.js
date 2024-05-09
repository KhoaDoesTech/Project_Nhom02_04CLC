'use strict';

const { OK } = require('../helpers/success.response');
const DiscountService = require('../services/discount.service');

class DiscountController {
  createDiscountCode = async (req, res, next) => {
    new OK({
      message: 'List Cart success',
      metadata: await DiscountService.createDiscountCode({
        ...req.body,
        shopId: req.user.userId,
      }),
    }).send(res);
  };
  updateDiscountCode = async (req, res, next) => {
    new OK({
      message: 'List Cart success',
      metadata: await await DiscountService.updateDiscountCode({
        ...req.body,
        shopId: req.user.userId,
      }),
    }).send(res);
  };
  getAllDiscountCodesWithProduct = async (req, res, next) => {
    const { discountCode, shopId, ...query } = req.query;
    new OK({
      message: 'List Cart success',
      metadata: await await DiscountService.getAllDiscountCodesWithProduct({
        discountCode,
        shopId,
        query,
      }),
    }).send(res);
  };
  getAllDiscountCodesByShop = async (req, res, next) => {
    new OK({
      message: 'List Cart success',
      metadata: await await DiscountService.getAllDiscountCodesByShop({
        ...req.query,
        shopId: req.user.userId,
      }),
    }).send(res);
  };
  getDiscountAmount = async (req, res, next) => {
    new OK({
      message: 'List Cart success',
      metadata: await await DiscountService.getDiscountAmount({
        ...req.body,
        shopId: req.user.userId,
      }),
    }).send(res);
  };
  deleteDiscountCode = async (req, res, next) => {
    new OK({
      message: 'List Cart success',
      metadata: await await DiscountService.deleteDiscountCode({
        ...req.body,
        shopId: req.user.userId,
      }),
    }).send(res);
  };
  cancelDiscountCode = async (req, res, next) => {
    new OK({
      message: 'List Cart success',
      metadata: await await DiscountService.cancelDiscountCode({
        ...req.body,
        shopId: req.user.userId,
      }),
    }).send(res);
  };
}

module.exports = new DiscountController();
