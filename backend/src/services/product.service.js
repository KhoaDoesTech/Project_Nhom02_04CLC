'use strict';

const {
  advancedSearch,
  createProduct,
  searchProductByUser,
  updateProductById,
  unPublishProductByShop,
  publishProductByShop,
  findAllProductForShop,
} = require('~/models/repositories/product.repo');
const {
  updateNestedObjectParser,
  removeUndefinedObject,
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

  static async findAllUnPublishForShop({ product_shop, query }) {
    const condition = { product_shop, isPublished: false };
    query = { ...query, ...condition };
    return await findAllProductForShop(query);
  }

  static async findAllPublishForShop({ product_shop, query }) {
    const condition = { product_shop, isPublished: true };
    query = { ...query, ...condition };
    return await findAllProductForShop(query);
  }

  static async searchProducts({ keySearch }) {
    return await searchProductByUser({ keySearch });
  }

  static async advancedSearch(query) {
    return await advancedSearch(query);
  }
}

module.exports = ProductService;
