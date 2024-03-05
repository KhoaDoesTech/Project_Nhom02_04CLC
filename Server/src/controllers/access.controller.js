'use strict';

const { CREATED, OK } = require('../helpers/success.response');
const AccessService = require('../services/access.service');

class AccessController {
  signUp = async (req, res, next) => {
    new CREATED({
      message:
        'Please verify your email. OTP has been sent to your email account!',
      metadata: await AccessService.signUp(req.body),
    }).send(res);
  };

  verifyEmail = async (req, res, next) => {
    new OK({
      message: 'Verify Email Success',
      metadata: await AccessService.verifyEmail(req.body),
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
