'use strict';

const { CREATED, OK } = require('../helpers/success.response');
const ProductService = require('../services/product.service');
class ProductController {
  createProduct = async (req, res) => {
    new CREATED({
      message: 'Create Product success!',
      metadata: await ProductService.createProduct({
        ...req.body,
        product_shop: req.user.userId,
      }),
    }).send(res);
  };

  updateProduct = async (req, res) => {
    new CREATED({
      message: 'Create Product success!',
      metadata: await ProductService.updateProduct(req.params.productId, {
        ...req.body,
        product_shop: req.user.userId,
      }),
    }).send(res);
  };

  publishProductByShop = async (req, res) => {
    new CREATED({
      message: 'Update publish product success',
      metadata: await ProductService.publishProductByShop({
        product_shop: req.user.userId,
        product_id: req.params.productId,
      }),
    }).send(res);
  };

  unPublishProductByShop = async (req, res) => {
    new CREATED({
      message: 'Update unpublish product success',
      metadata: await ProductService.unPublishProductByShop({
        product_shop: req.user.userId,
        product_id: req.params.productId,
      }),
    }).send(res);
  };

  getAllProductForShop = async (req, res) => {
    new CREATED({
      message: 'Find list success',
      metadata: await ProductService.getAllProductForShop({
        product_shop: req.user.userId,
        query: req.query,
      }),
    }).send(res);
  };

  getProductById = async (req, res) => {
    new OK({
      message: 'Search product success',
      metadata: await ProductService.getProductById(req.params.productId),
    }).send(res);
  };

  getProductBySlug = async (req, res) => {
    new OK({
      message: 'Search product success',
      metadata: await ProductService.getProductBySlug(req.params.productSlug),
    }).send(res);
  };

  getProductByShopId = async (req, res) => {
    new OK({
      message: 'Search product success',
      metadata: await ProductService.getProductByShopId({
        product_shop: req.params.productShop,
        query: req.query,
      }),
    }).send(res);
  };

  searchProducts = async (req, res) => {
    new OK({
      message: 'Search product success',
      metadata: await ProductService.searchProducts({
        keySearch: req.params.keySearch,
        query: req.query,
      }),
    }).send(res);
  };

  advancedSearch = async (req, res) => {
    new OK({
      message: 'Advanced search product success!',
      metadata: await ProductService.advancedSearch(req.query),
    }).send(res);
  };
}

module.exports = new ProductController();
