const QueryFeatures = require('~/utils/query.util');
const productModel = require('../product.model');
const { convertToObjectIdMongodb, unGetSelectData } = require('~/utils/misc');

const createProduct = async (product) => {
  const newProduct = await productModel.create(product);

  return newProduct;
};

const updateProductById = async ({ productId, bodyUpdate, isNew = true }) => {
  return await productModel.findByIdAndUpdate(productId, bodyUpdate, {
    new: isNew,
  });
};

const findProductById = async (productId, select) => {
  return await productModel.findById(productId).select(select);
};

const findProductBySlug = async (product_slug, select) => {
  return await productModel.findOne({ product_slug }).select(select);
};

const findProductsByShopId = async ({ product_shop, query }) => {
  const condition = {
    product_shop: convertToObjectIdMongodb(product_shop),
    isPublished: true,
  };
  query = { ...query, ...condition };
  return await advancedSearch(query);
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

const searchProductByUser = async ({ keySearch, queryInput }) => {
  const regexSearch = new RegExp(keySearch);
  const features = new QueryFeatures(
    productModel
      .find(
        {
          isPublished: true,
          $text: { $search: regexSearch },
        },
        { score: { $meta: 'textScore' } }
      )
      .sort({ score: { $meta: 'textScore' } }),
    queryInput
  )
    .filter()
    .limitFields()
    .paging();

  return await features.query.lean();
};

const advancedSearch = async (queryInput) => {
  const features = new QueryFeatures(productModel.find(), queryInput)
    .filter()
    .sort()
    .limitFields()
    .paging();

  return await features.query.lean();
};

module.exports = {
  advancedSearch,
  createProduct,
  searchProductByUser,
  updateProductById,
  unPublishProductByShop,
  publishProductByShop,
  findProductById,
  findProductsByShopId,
  findProductBySlug,
};
