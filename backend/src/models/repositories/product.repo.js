const QueryFeatures = require('~/utils/query.util');
const productModel = require('../product.model');
const { convertToObjectIdMongodb } = require('~/utils/misc');

const createProduct = async (product) => {
  const newProduct = await productModel.create(product);

  return newProduct;
};

const updateProductById = async ({ productId, bodyUpdate, isNew = true }) => {
  return await productModel.findByIdAndUpdate(productId, bodyUpdate, {
    new: isNew,
  });
};

const publishProductByShop = async ({ product_shop, product_id }) => {
  const foundProduct = await productModel.findOne({
    product_shop: convertToObjectIdMongodb(product_shop),
    _id: convertToObjectIdMongodb(product_id),
  });

  if (!foundProduct) return foundProduct;

  foundProduct.isPublished = true;

  const { modifiedCount } = await foundProduct.save();

  return modifiedCount;
};

const unPublishProductByShop = async ({ product_shop, product_id }) => {
  const foundProduct = await productModel.findOne({
    product_shop: convertToObjectIdMongodb(product_shop),
    _id: convertToObjectIdMongodb(product_id),
  });

  if (!foundProduct) return foundProduct;

  foundProduct.isPublished = false;

  const { modifiedCount } = await foundProduct.save();

  return modifiedCount;
};

const findAllProductForShop = async (query) => {
  return await advancedSearch(query);
};

const searchProductByUser = async ({ keySearch }) => {
  const regexSearch = new RegExp(keySearch);
  return await productModel
    .find(
      {
        isPublished: true,
        $text: { $search: regexSearch },
      },
      { score: { $meta: 'textScore' } }
    )
    .sort({ score: { $meta: 'textScore' } })
    .lean();
};

const advancedSearch = async (queryInput) => {
  const features = new QueryFeatures(productModel.find(), queryInput)
    .filter()
    .sort()
    .limitFields()
    .paging();

  return await features.query;
};

module.exports = {
  advancedSearch,
  createProduct,
  searchProductByUser,
  updateProductById,
  unPublishProductByShop,
  publishProductByShop,
  findAllProductForShop,
};
