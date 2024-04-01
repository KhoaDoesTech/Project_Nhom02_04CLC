'use strict';

const QueryFeatures = require('~/utils/query.util');
const resourceModel = require('../resource.model');

const createResource = async ({ name, slug, description }) => {
  const resource = await resourceModel.create({
    src_name: name,
    src_slug: slug,
    src_description: description,
  });
  return resource;
};

const findAllResource = async (queryInput) => {
  const features = new QueryFeatures(resourceModel.find(), queryInput)
    .filter()
    .sort()
    .limitFields()
    .paging();

  return await features.query;
};

module.exports = {
  createResource,
  findAllResource,
};
