'use strict';

const express = require('express');
const CartController = require('~/controllers/cart.controller');
import asyncHandler from '~/middleware/async.middleware';
import authentication from '~/middleware/auth.middleware';

const router = express.Router();

router.use(authentication);
router.post('', asyncHandler(CartController.addToCart));
router.post('/update', asyncHandler(CartController.updateCart));
router.delete('', asyncHandler(CartController.deleteCart));
router.get('', asyncHandler(CartController.listCart));

module.exports = router;
