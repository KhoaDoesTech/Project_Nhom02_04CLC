'use strict';

const express = require('express');
const AccessController = require('~/controllers/access.controller');
const asyncHandler = require('~/middleware/async.middleware');
const authentication = require('~/middleware/auth.middleware');
const router = express.Router();

// sign up
router.post('/signup', asyncHandler(AccessController.signUp));
router.post('/verify-email', asyncHandler(AccessController.verifyEmail));
router.post('/resend-otp', asyncHandler(AccessController.resendOtp));

router.post('/forget-password', asyncHandler(AccessController.forgetPassword));
router.post('/reset-password', asyncHandler(AccessController.resetPassword));

router.post('/login', asyncHandler(AccessController.logIn));

router.use(authentication);

router.post('/refresh', asyncHandler(AccessController.refreshToken));
router.post('/logout', asyncHandler(AccessController.logOut));

module.exports = router;
