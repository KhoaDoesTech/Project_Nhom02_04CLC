'use strict';

const { BadRequestError } = require('../helpers/error.response');
const { saveOtp, getOtp } = require('../models/repositories/otp.repo');
const { generateOTP, comparePassword } = require('../utils/crypto');

const createOtp = async (email) => {
  const otp = await generateOTP();

  const newToken = await saveOtp(email, otp);
  if (!newToken) throw new BadRequestError("Can't save OTP");

  return otp;
};

const validateOtp = async ({ email, otp }) => {
  const foundOtp = await getOtp(email);
  if (!foundOtp) throw new BadRequestError('OTP has expired');

  const isMatched = await comparePassword(otp, foundOtp.otp_token);
  if (!isMatched) throw new BadRequestError('Please submit a valid OTP!');

  return 1;
};

module.exports = { createOtp, validateOtp };
