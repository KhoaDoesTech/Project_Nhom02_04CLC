'use strict';

const { Header } = require('../constants');
const {
  NotFoundError,
  AuthFailureError,
  TokenExpiredError,
  ForbiddenError,
} = require('../helpers/error.response');
const {
  findByUserId,
  deleteKeyById,
} = require('../models/repositories/token.repo');
const { verifyJWT, isAccessTokenExpired } = require('../utils/jwt');
const asyncHandler = require('./async.middleware');

const authentication = asyncHandler(async (req, res, next) => {
  // check userId missing
  const userId = req.headers[Header.CLIENT_ID];
  if (!userId) throw new AuthFailureError('Invalid Request');

  // get accessToken
  const keyStore = await findByUserId(userId);
  if (!keyStore) throw new NotFoundError('Not found keyStore');

  // verify refresh token
  if (req.headers[Header.REFRESH_TOKEN]) {
    const refreshToken = req.headers[Header.REFRESH_TOKEN];

    if (keyStore.refresh_tokens_used.includes(refreshToken)) {
      await deleteKeyById(userId);
      throw new ForbiddenError('Something wrong happened! Please relogin');
    }

    const decodeUser = await verifyJWT(refreshToken, keyStore.public_key);
    // check keyStore with userId?
    if (userId !== decodeUser.userId)
      throw new AuthFailureError('Invalid UserId');

    req.keyStore = keyStore;
    req.user = decodeUser;
    req.refreshToken = refreshToken;

    return next();
  }

  const accessToken = req.headers[Header.AUTHORIZATION];
  if (!accessToken) throw new AuthFailureError('Invalid Request');

  if (isAccessTokenExpired(accessToken))
    throw new TokenExpiredError('Access token has expired');

  const decodeUser = await verifyJWT(accessToken, keyStore.public_key);

  // check keyStore with userId?
  if (userId !== decodeUser.userId)
    throw new AuthFailureError('Invalid UserId');

  req.keyStore = keyStore;
  req.user = decodeUser;

  return next();
});

module.exports = authentication;
