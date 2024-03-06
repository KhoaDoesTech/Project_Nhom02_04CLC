'use strict';

const { convertToObjectIdMongodb } = require('../../utils/misc');
const tokenModel = require('../token.model');

const findByUserId = async (userId) => {
  return await tokenModel.findOne({
    user_id: convertToObjectIdMongodb(userId),
  });
};

const removeKeyById = async (id) => {
  return await tokenModel.deleteOne(id);
};

const findByRefreshTokenUsed = async (refreshToken) => {
  return await tokenModel.findOne({ refresh_token_used: refreshToken }).lean();
};

const findByRefreshToken = async (refreshToken) => {
  return await tokenModel.findOne({ refresh_token: refreshToken });
};

const deleteKeyById = async (userId) => {
  return await tokenModel.deleteOne({
    user_id: convertToObjectIdMongodb(userId),
  });
};

const updateTokens = async (filter, update, options) => {
  return await tokenModel.findOneAndUpdate(filter, update, options);
};

module.exports = {
  findByUserId,
  removeKeyById,
  findByRefreshTokenUsed,
  findByRefreshToken,
  deleteKeyById,
  updateTokens,
};
