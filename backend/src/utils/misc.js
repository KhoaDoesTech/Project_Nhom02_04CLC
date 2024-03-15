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

const replacePlaceholder = (template, params) => {
  Object.keys(params).forEach((k) => {
    const placeholder = `{{${k}}}`;
    if (template.includes(placeholder)) {
      template = template.replace(new RegExp(placeholder, 'g'), params[k]);
    }
  });

  return template;
};

module.exports = {
  convertToObjectIdMongodb,
  getInfoData,
  getSelectData,
  unGetSelectData,
  replacePlaceholder,
};
