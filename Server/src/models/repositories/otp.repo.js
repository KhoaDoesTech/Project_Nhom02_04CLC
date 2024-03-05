'use strict';

const { generateHashedPassword } = require('../../utils/cipherUtils');
const otpModel = require('../otp.model');
const bcrypt = require('bcrypt');

const saveOtp = async (email, otp) => {
  const hashOtp = await generateHashedPassword(otp);

  return await otpModel.create({ email, otp: hashOtp });
};

const checkOtpExists = async (email) => {
  return await otpModel.findOne({ email }).lean();
};

module.exports = { saveOtp, checkOtpExists };
