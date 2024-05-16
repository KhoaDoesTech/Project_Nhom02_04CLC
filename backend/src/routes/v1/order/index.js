'use strict';

const express = require('express');
const OrderController = require('~/controllers/order.controller');
const asyncHandler = require('~/middleware/async.middleware');
const authentication = require('~/middleware/auth.middleware');

const router = express.Router();

router.post('/review', asyncHandler(OrderController.reviewOrder));

module.exports = router;
