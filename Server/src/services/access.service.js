'use strict';

const OtpService = require('./otp.service');
const TokenService = require('./token.service');

const {
  BadRequestError,
  AuthFailureError,
} = require('../helpers/error.response');
const {
  checkUserExists,
  createUser,
  activeUser,
} = require('../models/repositories/user.repo');

const {
  generateHashedPassword,
  comparePassword,
} = require('../utils/cipherUtils');
const { sendWithWelcomeTemplate } = require('../utils/sendEmail');
const { getInfoData } = require('../utils/misc');
const { removeKeyById } = require('../models/repositories/token.repo');

class AccessService {
  // Verify
  static verifyEmail = async ({ email, otp }) => {
    const foundUser = await checkUserExists(email);
    if (!foundUser) throw new BadRequestError('User not found!');

    if (foundUser.usr_status === 'active')
      throw new BadRequestError('User is already verified!');

    await OtpService.validateOtp({ email, otp });

    await activeUser(email);

    const tokens = await TokenService.createTokens(foundUser);

    await sendWithWelcomeTemplate(foundUser);

    return {
      user: getInfoData({
        fields: ['_id', 'usr_name', 'usr_email'],
        object: foundUser,
      }),
      tokens,
    };
  };
  // Resend OTP
  // Forgot password
  // Login
  static logIn = async ({ email, password }) => {
    // check email in dbs
    const foundUser = await checkUserExists(email);
    if (!foundUser) throw new BadRequestError('Shop not registered');

    // match password
    const match = await comparePassword(password, foundUser.usr_password);
    if (!match) throw new AuthFailureError('Authentication error');

    const tokens = await TokenService.createTokens(foundUser);
    return {
      user: foundUser,
      tokens,
    };
  };

  // Logout
  static logOut = async (keyStore) => {
    const delKey = await removeKeyById(keyStore._id);
    return delKey;
  };

  static signUp = async ({ name, email, password }) => {
    // Check mail exists
    const foundUser = await checkUserExists(email);

    if (foundUser) {
      if (foundUser.usr_status === 'pending')
        throw new BadRequestError("User haven't verify email");
      throw new BadRequestError('User already registered!');
    }

    const passwordHash = await generateHashedPassword(password);

    const newUser = await createUser({
      usr_name: name,
      usr_email: email,
      usr_password: passwordHash,
    });

    if (!newUser) throw new BadRequestError("Can't create User");

    // Send OTP
    await OtpService.sendOTP({ email });

    return {
      user: email,
    };
  };
}

module.exports = AccessService;
