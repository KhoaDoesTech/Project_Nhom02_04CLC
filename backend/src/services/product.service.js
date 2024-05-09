'use strict';

const {
  advancedSearch,
  createProduct,
  searchProductByUser,
  updateProductById,
  unPublishProductByShop,
  publishProductByShop,
  findProductById,
  findProductsByShopId,
  findProductBySlug,
} = require('~/models/repositories/product.repo');

const {
  updateNestedObjectParser,
  removeUndefinedObject,
  unGetSelectData,
  convertToObjectIdMongodb,
} = require('~/utils/misc');

class ProductService {
  static async createProduct(product) {
    const newProduct = await createProduct(product);

    return newProduct;
  }

  static async updateProduct(productId, bodyUpdate) {
    const objectParams = removeUndefinedObject(bodyUpdate);

    const updateProduct = await updateProductById({
      productId,
      bodyUpdate: updateNestedObjectParser(objectParams),
    });

    return updateProduct;
  }
  static async publishProductByShop({ product_shop, product_id }) {
    return await publishProductByShop({ product_shop, product_id });
  }

  static async unPublishProductByShop({ product_shop, product_id }) {
    return await unPublishProductByShop({ product_shop, product_id });
  }

  static async getProductById(product_id) {
    return await findProductById(product_id, unGetSelectData(['__v']));
  }

  static async getProductBySlug(product_slug) {
    return await findProductBySlug(product_slug, unGetSelectData(['__v']));
  }

  static async getProductByShopId({ product_shop, query }) {
    const product = await findProductsByShopId({
      product_shop,
      query,
    });
    return product;
  }

  static async getAllProductForShop({ product_shop, query }) {
    const condition = { product_shop: convertToObjectIdMongodb(product_shop) };
    query = { ...query, ...condition };
    return await advancedSearch(query);
  }

  static async searchProducts({ keySearch, query }) {
    return await searchProductByUser({ keySearch, queryInput: query });
  }

  static async advancedSearch(query) {
    return await advancedSearch(query);
  }
}

module.exports = ProductService;
