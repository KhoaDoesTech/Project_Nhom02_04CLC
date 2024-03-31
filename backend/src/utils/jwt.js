'use strict';

const JWT = require('jsonwebtoken');

const createTokenPair = async (payload, privateKey) => {
  const accessToken = await JWT.sign(payload, privateKey, {
    algorithm: 'RS256',
    expiresIn: '1d',
  });

  const refreshToken = await JWT.sign(payload, privateKey, {
    algorithm: 'RS256',
    expiresIn: '30d',
  });

  return { accessToken, refreshToken };
};

const verifyJWT = async (token, keySecret) => {
  return await JWT.verify(token, keySecret);
};

const isAccessTokenExpired = (accessToken) => {
  try {
    const decodedToken = JWT.decode(accessToken);
    if (!decodedToken || !decodedToken.exp) {
      // Token or expiration claim is missing
      return true;
    }
    // Check if the current time is greater than or equal to the expiration time
    return Date.now() >= decodedToken.exp * 1000;
  } catch (error) {
    console.error('Error decoding access token:', error.message);
    return true;
  }
};

module.exports = {
  createTokenPair,
  verifyJWT,
  isAccessTokenExpired,
};
