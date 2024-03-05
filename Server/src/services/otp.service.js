'use strict';

const { BadRequestError } = require('../helpers/error.response');
const { saveOtp, checkOtpExists } = require('../models/repositories/otp.repo');
const { generateOTP, comparePassword } = require('../utils/cipherUtils');
const { sendWithOtpTemplate } = require('../utils/sendEmail');

class OtpService {
  static sendOTP = async ({ email }) => {
    const otp = await generateOTP();

    const newOtp = await saveOtp(email, otp);
    if (!newOtp) throw new BadRequestError("Error: Can't save OTP");

    // Send OTP
    const sendEmail = await sendWithOtpTemplate(email, otp);
    if (!sendEmail) throw new BadRequestError("Error: Can't send Email");
  };

  static validateOtp = async ({ email, otp }) => {
    const foundOtp = await checkOtpExists(email);
    if (!foundOtp) throw new BadRequestError('OTP has expired');

    const isMatched = await comparePassword(otp, foundOtp.otp);
    if (!isMatched) throw new BadRequestError('Please submit a valid OTP!');
  };
}

module.exports = OtpService;
