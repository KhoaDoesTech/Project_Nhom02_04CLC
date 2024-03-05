'use strict';

const { Header } = require('../constants');
const {
  NotFoundError,
  AuthFailureError,
} = require('../helpers/error.response');
const { findByUserId } = require('../models/repositories/token.repo');
const { verifyJWT } = require('../utils/jwtUtils');
const asyncHandler = require('./asyncHandler');

const authentication = asyncHandler(async (req, res, next) => {
  // check userId missing
  const userId = req.headers[Header.CLIENT_ID];
  console.log(userId);
  if (!userId) throw new AuthFailureError('Invalid Request');

  // get accessToken
  const keyStore = await findByUserId(userId);
  if (!keyStore) throw new NotFoundError('Not found keyStore');

  // verify Token
  if (req.headers[Header.REFRESH_TOKEN]) {
    try {
      const refreshToken = req.headers[Header.REFRESH_TOKEN];
      const decodeUser = await verifyJWT(refreshToken, keyStore.public_key);

      // check keyStore with userId?
      if (userId !== decodeUser.userId)
        throw new AuthFailureError('Invalid UserId');

      req.keyStore = keyStore;
      req.user = decodeUser;
      req.refreshToken = refreshToken;

      return next();
    } catch (error) {
      throw error;
    }
  }

  const accessToken = req.headers[Header.AUTHORIZATION];
  if (!accessToken) throw new AuthFailureError('Invalid Request');

  try {
    const decodeUser = await verifyJWT(accessToken, keyStore.public_key);
    // check keyStore with userId?
    if (userId !== decodeUser.userId)
      throw new AuthFailureError('Invalid UserId');

    req.keyStore = keyStore;
    req.user = decodeUser;

    return next();
  } catch (error) {
    throw error;
  }
});

module.exports = {
  authentication,
};
