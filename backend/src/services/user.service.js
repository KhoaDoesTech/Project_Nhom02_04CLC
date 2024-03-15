'use strict';

const { BadRequestError } = require('../helpers/error.response');
const {
  findUserByEmail,
  findUserById,
} = require('../models/repositories/user.repo');

class UserService {
  // User
  static getAuthUser = async ({ email }) => {
    const foundUser = findUserByEmail(email);
    if (!foundUser) throw new BadRequestError("Can't find user");

    return {
      user: foundUser,
    };
  };

  // Admin
  static getUser = async ({ userId }) => {
    const foundUser = findUserById(userId);
    if (!foundUser) throw new BadRequestError("Can't find user");

    return {
      user: foundUser,
    };
  };

  // search user
  // get all user
  // block user
  // update user
  // update user password
}

module.exports = UserService;
