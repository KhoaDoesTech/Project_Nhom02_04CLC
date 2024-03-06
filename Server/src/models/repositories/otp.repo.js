'use strict';

const { generateHashedPassword } = require('../../utils/crypto');
const otpModel = require('../otp.model');
const bcrypt = require('bcrypt');

const saveOtp = async (email, otp) => {
  const hashOtp = await generateHashedPassword(otp);

  return await otpModel.create({ otp_email: email, otp_token: hashOtp });
};

const getOtp = async (email) => {
  return await otpModel.findOne({ otp_email: email }).lean();
};

module.exports = { saveOtp, getOtp };
