'use strict';

const { Types } = require('mongoose');

const _ = require('lodash');

const convertToObjectIdMongodb = (id) => new Types.ObjectId(id);

const getInfoData = ({ fields = [], object = {} }) => {
  return _.pick(object, fields);
};

const getSelectData = (select = []) => {
  return Object.fromEntries(select.map((el) => [el, 1]));
};

const unGetSelectData = (select = []) => {
  return Object.fromEntries(select.map((el) => [el, 0]));
};

module.exports = {
  convertToObjectIdMongodb,
  getInfoData,
  getSelectData,
  unGetSelectData,
};
