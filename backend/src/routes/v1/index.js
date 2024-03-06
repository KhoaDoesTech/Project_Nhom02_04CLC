'use strict';

const express = require('express');
const { NotFoundError } = require('../../helpers/error.response');
// const { apiKey, permission } = require("../auth/checkAuth");
const router = express.Router();

// check apiKey
// router.use(apiKey);
// check permission
// router.use(permission("0000"));

router.use('/v1/api/email', require('./email'));
router.use('/v1/api/auth', require('./access'));

module.exports = router;
