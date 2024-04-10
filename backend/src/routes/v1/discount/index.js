'use strict';
const express = require('express');
const DiscountController = require('~/controllers/discount.controller');
const asyncHandler = require('~/middleware/async.middleware');
const authentication = require('~/middleware/auth.middleware');

const router = express.Router();

router.post('/amount', DiscountController.getDiscountAmount);
router.get(
  '/list-product-code',
  DiscountController.getAllDiscountCodesWithProduct
);

router.use(authentication);

router.post('', asyncHandler(DiscountController.createDiscountCode));
router.get('', asyncHandler(DiscountController.getAllDiscountCodesByShop));
router.post('/cancel', asyncHandler(DiscountController.cancelDiscountCode));
router.delete('/', asyncHandler(DiscountController.deleteDiscountCode));

module.exports = router;
