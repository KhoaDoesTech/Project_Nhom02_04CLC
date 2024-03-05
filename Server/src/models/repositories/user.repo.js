'use strict';

const userModel = require('../user.model');

const checkUserExists = async (email) => {
  return await userModel.findOne({ usr_email: email }).lean();
};

const createUser = async (info) => {
  return await userModel.create(info);
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
  checkUserExists,
  createUser,
  activeUser,
};
