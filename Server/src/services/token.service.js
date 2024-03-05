'use strict';

const { updateTokens } = require('../models/repositories/token.repo');
const { generateKeyPair } = require('../utils/cipherUtils');
const { createTokenPair } = require('../utils/jwtUtils');

class TokenService {
  static saveToken = async (userId, publicKey, refreshToken) => {
    const publicKeyString = publicKey.toString();

    const filter = { user_id: userId },
      update = {
        public_key: publicKeyString,
        refresh_token_used: [],
        refresh_token: refreshToken,
      },
      options = { upsert: true, new: true };

    await updateTokens(filter, update, options);
  };

  static createTokens = async (user) => {
    const { _id: userId, usr_email: email } = user;
    const { publicKey, privateKey } = await generateKeyPair();

    const tokens = await createTokenPair({ userId, email }, privateKey);

    await this.saveToken(userId, publicKey, tokens.refreshToken);

    return tokens;
  };
}

module.exports = TokenService;
