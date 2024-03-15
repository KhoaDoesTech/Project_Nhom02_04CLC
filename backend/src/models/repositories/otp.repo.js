'use strict';

const { generateHashedPassword } = require('../../utils/crypto');
const otpModel = require('../otp.model');

const saveOtp = async (email, otp, type) => {
  const hashOtp = await generateHashedPassword(otp);

  return await otpModel.create({
    otp_email: email,
    otp_token: hashOtp,
    otp_type: type,
  });
};

const getOtp = async ({ email, type }) => {
  return await otpModel.findOne({ otp_email: email, otp_type: type }).lean();
};

module.exports = { saveOtp, getOtp };
