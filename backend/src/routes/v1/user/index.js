'use strict';

const express = require('express');
const UserController = require('~/controllers/user.controller');
const asyncHandler = require('~/middleware/async.middleware');
const { grantAccess } = require('~/middleware/rbac.middleware');
const router = express.Router();

// Shop
router.get(
  '/search/:keySearch',
  asyncHandler(UserController.searchUserByKeySearch)
);

module.exports = router;
