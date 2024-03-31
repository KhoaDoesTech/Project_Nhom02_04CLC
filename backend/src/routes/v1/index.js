'use strict';

const express = require('express');
const router = express.Router();

router.use('/v1/api/email', require('./email'));
router.use('/v1/api/auth', require('./access'));
router.use('/v1/api/product', require('./product'));

module.exports = router;
