'use strict';

const QueryFeatures = require('~/utils/query.util');
const userModel = require('../user.model');

const findUserByEmail = async (email) => {
  return await userModel.findOne({ usr_email: email }).lean();
};

const findUserByKeysearch = async (keySearch) => {
  const regexSearch = new RegExp(keySearch);
  const features = new QueryFeatures(
    userModel
      .find(
        {
          $text: { $search: regexSearch },
        },
        { score: { $meta: 'textScore' } }
      )
      .sort({ score: { $meta: 'textScore' } })
  )
    .filter()
    .limitFields()
    .paging();

  return await features.query.lean();
};

const findUserById = async (userId) => {
  return await userModel.findOne({ _id: userId }).lean();
};

const createUser = async ({ usr_name, usr_email, usr_password, usr_role }) => {
  return await userModel.create({
    usr_name,
    usr_email,
    usr_password,
    usr_role,
  });
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
  findUserByKeysearch,
};
