'use strict';

const {
  BadRequestError,
  AuthFailureError,
  NotFoundError,
} = require('../helpers/error.response');

const {
  createUser,
  activeUser,
  findUserByEmail,
  updatePassword,
} = require('../models/repositories/user.repo');

const {
  app: { url },
} = require('../configs/environment');

const appUrl = `${url}`;

const { generateHashedPassword, comparePassword } = require('../utils/crypto');
const { sendTemplateEmail } = require('../utils/email');
const { getInfoData } = require('../utils/misc');
const { removeKeyById } = require('../models/repositories/token.repo');
const { createOtp, validateOtp } = require('./otp.service');
const { getOtp } = require('../models/repositories/otp.repo');
const TokenService = require('./token.service');

class AccessService {
  // refreshToken

  static logIn = async ({ email, password }) => {
    const foundUser = await findUserByEmail(email);
    if (!foundUser) throw new BadRequestError('User not registered');

    if (foundUser.usr_status === 'pending')
      throw new BadRequestError("User haven't verify email");

    if (foundUser.usr_status === 'block')
      throw new BadRequestError('User blocked');

    const match = await comparePassword(password, foundUser.usr_password);
    if (!match) throw new AuthFailureError('Authentication error');

    const tokens = await TokenService.createTokens(foundUser);

    return {
      user: foundUser,
      tokens,
    };
  };

  static logOut = async (keyStore) => {
    const delKey = await removeKeyById(keyStore._id);
    return delKey;
  };

  static resetPassword = async ({ email, new_password, otp }) => {
    const foundUser = await findUserByEmail(email);

    await validateOtp({ email, otp, type: 'reset' });

    const matched = await comparePassword(new_password, foundUser.usr_password);
    if (matched)
      throw new BadRequestError(
        'The new password must be different from the old one'
      );

    const passwordHash = await generateHashedPassword(new_password);
    await updatePassword(email, passwordHash);

    const sentEmail = await sendTemplateEmail({ email, tag: 'success' });
    if (!sentEmail) throw new BadRequestError("Can't send success email");

    return {
      user: email,
    };
  };

  static forgetPassword = async ({ email }) => {
    const foundUser = await findUserByEmail(email);
    if (!foundUser) throw new NotFoundError('User not found!');

    if (foundUser.usr_status === 'pending')
      throw new BadRequestError("User haven't verify email");

    if (foundUser.usr_status === 'block')
      throw new BadRequestError('User blocked');

    const foundOtp = await getOtp({ email, type: 'reset' });
    if (foundOtp)
      throw new BadRequestError(
        'Only after one minute you can request for another otp!'
      );
    console.log(1);
    // Send OTP
    const token = await createOtp({ email, type: 'reset' });
    const resetPasswordUrl = `${appUrl}/reset-password?token=${token}`;
    console.log(2);
    const sentEmail = await sendTemplateEmail({
      email,
      tag: 'url',
      params: { resetPasswordUrl: resetPasswordUrl },
    });
    if (!sentEmail) throw new BadRequestError("Can't send url email");

    return {
      user: email,
    };
  };

  static resendOtp = async ({ email }) => {
    const foundUser = await findUserByEmail(email);
    if (!foundUser) throw new NotFoundError('User not found!');

    if (foundUser.usr_status === 'block')
      throw new BadRequestError('User blocked');

    const foundOtp = await getOtp({ email, type: 'verify' });
    if (foundOtp)
      throw new BadRequestError(
        'Only after one minute you can request for another otp!'
      );

    // Send OTP
    const token = await createOtp({ email, type: 'verify' });
    const sentEmail = await sendTemplateEmail({
      email,
      tag: 'otp',
      params: { otpCode: token },
    });
    if (!sentEmail) throw new BadRequestError("Can't send otp email");

    return {
      user: email,
    };
  };

  static verifyEmail = async ({ email, otp }) => {
    const foundUser = await findUserByEmail(email);
    if (!foundUser) throw new BadRequestError('User not found!');

    if (foundUser.usr_status === 'active')
      throw new BadRequestError('User is already verified!');

    if (foundUser.usr_status === 'block')
      throw new BadRequestError('User blocked');

    await validateOtp({ email, otp, type: 'verify' });

    await activeUser(email);

    const tokens = await TokenService.createTokens(foundUser);

    const sentEmail = await sendTemplateEmail({
      email,
      tag: 'welcome',
      params: {
        userName: foundUser.usr_name,
      },
    });
    if (!sentEmail) throw new BadRequestError("Can't send welcome email");

    return {
      user: getInfoData({
        fields: ['_id', 'usr_name', 'usr_email'],
        object: foundUser,
      }),
      tokens,
    };
  };

  static signUp = async ({ name, email, password }) => {
    // Check mail exists
    const foundUser = await findUserByEmail(email);

    if (foundUser) {
      if (foundUser.usr_status === 'pending')
        throw new BadRequestError("User haven't verify email");

      if (foundUser.usr_status === 'block')
        throw new BadRequestError('User blocked');

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
    const token = await createOtp({ email, type: 'verify' });
    const sentEmail = await sendTemplateEmail({
      email,
      tag: 'otp',
      params: { otpCode: token },
    });
    if (!sentEmail) throw new BadRequestError("Can't send otp email");

    return {
      user: email,
    };
  };
}

module.exports = AccessService;
