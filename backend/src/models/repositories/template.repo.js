'use strict';

const templateModel = require('../template.model');

const createTemplate = async ({
  tem_name,
  tem_html,
  tem_subject,
  tem_tag,
  tem_status,
}) => {
  return await templateModel.create({
    tem_name,
    tem_html,
    tem_subject,
    tem_tag,
    tem_status,
  });
};

const getTemplateByName = async (tem_name) => {
  return await templateModel.findOne({ tem_name });
};
// get all templates
const getTemplates = async () => {
  return await templateModel.find().lean();
};

const findTemplateByTag = async (tem_tag) => {
  return await templateModel.findOne({ tem_tag, tem_status: true }).lean();
};

module.exports = {
  createTemplate,
  getTemplateByName,
  findTemplateByTag,
  getTemplates,
};
