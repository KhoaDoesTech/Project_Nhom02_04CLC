'use strict';

const express = require('express');
const AccessController = require('../../../controllers/access.controller');
const asyncHandler = require('../../../middleware/asyncHandler');
const { authentication } = require('../../../middleware/checkAuth');
const router = express.Router();

// sign up
router.post('/auth/signup', asyncHandler(AccessController.signUp));
router.post('/auth/verify-email', asyncHandler(AccessController.verifyEmail));
router.post('/auth/login', asyncHandler(AccessController.logIn));

router.use(authentication);

router.post('/auth/logout', asyncHandler(AccessController.logOut));

module.exports = router;
