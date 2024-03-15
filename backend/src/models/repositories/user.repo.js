'use strict';

const userModel = require('../user.model');

const findUserByEmail = async (email) => {
  return await userModel.findOne({ usr_email: email }).lean();
};

const findUserById = async (userId) => {
  return await userModel.findOne({ _id: userId }).lean();
};

const createUser = async (info) => {
  return await userModel.create(info);
};

const updatePassword = async (email, password) => {
  const query = {
      usr_email: email,
    },
    updateSet = {
      $set: {
        usr_password: password,
      },
    },
    options = { upsert: true, new: true };
  return await userModel.findOneAndUpdate(query, updateSet, options);
};

const activeUser = async (email) => {
  const query = {
      usr_email: email,
    },
    updateSet = {
      $set: {
        usr_status: 'active',
      },
    },
    options = { upsert: true, new: true };
  return await userModel.findOneAndUpdate(query, updateSet, options);
};

module.exports = {
  findUserByEmail,
  findUserById,
  createUser,
  activeUser,
  updatePassword,
};
