'use strict';

const express = require('express');
const router = express.Router();

router.use('/v1/api/email', require('./email'));
router.use('/v1/api/auth', require('./access'));
router.use('/v1/api/product', require('./product'));
router.use('/v1/api/user', require('./user'));
router.use('/v1/api/cart', require('./cart'));
router.use('/v1/api/comment', require('./comment'));
router.use('/v1/api/discount', require('./discount'));
router.use('/v1/api/upload', require('./upload'));

module.exports = router;
