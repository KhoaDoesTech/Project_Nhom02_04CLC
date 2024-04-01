'use strict';

const { BadRequestError } = require('../helpers/error.response');
const {
  saveOtp,
  getOtp,
  deleteOtp,
} = require('../models/repositories/otp.repo');
const { generateOTP } = require('../utils/crypto');

const createOtp = async ({ email, type }) => {
  const otp = await generateOTP();

  const newToken = await saveOtp(email, otp, type);
  if (!newToken) throw new BadRequestError('Can not save OTP');

  return otp;
};

const validateOtp = async ({ token, type }) => {
  const foundOtp = await getOtp({ token, type });
  if (!foundOtp) throw new BadRequestError('OTP has expired');

  await deleteOtp(foundOtp);

  return foundOtp;
};

module.exports = { createOtp, validateOtp };
