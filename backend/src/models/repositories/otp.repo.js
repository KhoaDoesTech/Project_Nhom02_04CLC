'use strict';

const otpModel = require('../otp.model');

const saveOtp = async (email, otp, type) => {
  return await otpModel.create({
    otp_email: email,
    otp_token: otp,
    otp_type: type,
  });
};

const getOtp = async ({ token, type }) => {
  return await otpModel.findOne({ otp_token: token, otp_type: type });
};

const getOtpByEmail = async ({ email, type }) => {
  return await otpModel.findOne({ otp_email: email, otp_type: type }).lean();
};

const deleteOtp = async (token) => {
  return await otpModel.deleteOne({ otp_token: token });
};

module.exports = { saveOtp, getOtp, deleteOtp, getOtpByEmail };
