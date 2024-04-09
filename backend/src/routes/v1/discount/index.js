'use strict';
const express = require('express');
const DiscountController = require('~/controllers/discount.controller');
import asyncHandler from '~/middleware/async.middleware';
import authentication from '~/middleware/auth.middleware';

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
