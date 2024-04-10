'use strict';

const { CREATED, OK } = require('../helpers/success.response');
const AccessService = require('../services/access.service');

class AccessController {
  refreshToken = async (req, res, next) => {
    new OK({
      message: 'Get Refresh Token success!',
      metadata: await AccessService.refreshToken({
        refreshToken: req.refreshToken,
        user: req.user,
        keyStore: req.keyStore,
      }),
    }).send(res);
  };

  signUp = async (req, res, next) => {
    new CREATED({
      message:
        'Please verify your email. OTP has been sent to your email account!',
      metadata: await AccessService.signUp(req.body),
    }).send(res);
  };

  verifyEmail = async (req, res, next) => {
    new OK({
      message: 'Your email is verified',
      metadata: await AccessService.verifyEmail(req.body),
    }).send(res);
  };

  resendOtp = async (req, res, next) => {
    new OK({
      message: 'New OTP has been sent to your registered email account',
      metadata: await AccessService.resendOtp(req.body),
    }).send(res);
  };

  forgetPassword = async (req, res, next) => {
    new OK({
      message: 'Reset Password Link has been sent',
      metadata: await AccessService.forgetPassword(req.body),
    }).send(res);
  };

  resetPassword = async (req, res, next) => {
    new OK({
      message: 'Password Reset Successfully',
      metadata: await AccessService.resetPassword(req.body),
    }).send(res);
  };

  logOut = async (req, res, next) => {
    new OK({
      message: 'Logout success!',
      metadata: await AccessService.logOut(req.keyStore),
    }).send(res);
  };

  logIn = async (req, res, next) => {
    new OK({
      metadata: await AccessService.logIn(req.body),
    }).send(res);
  };
}

module.exports = new AccessController();
