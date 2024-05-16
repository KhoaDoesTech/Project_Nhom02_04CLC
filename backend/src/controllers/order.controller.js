'use strict';

const { OK } = require('../helpers/success.response');
const OrderService = require('../services/order.service');

class OrderController {
  reviewOrder = async (req, res, next) => {
    new OK({
      message: 'reviewOrder success',
      metadata: await OrderService.reviewOrder(req.body),
    }).send(res);
  };
}

module.exports = new OrderController();
