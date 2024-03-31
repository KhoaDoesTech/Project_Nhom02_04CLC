'use strict';

import { CREATED, OK } from '../helpers/success.response';
import ProductService from '../services/product.service';

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

  getAllUnPublishForShop = async (req, res) => {
    new CREATED({
      message: 'Find list unpublished success',
      metadata: await ProductService.findAllUnPublishForShop({
        product_shop: req.user.userId,
        query: req.query,
      }),
    }).send(res);
  };

  getAllPublishForShop = async (req, res) => {
    new CREATED({
      message: 'Find list published success',
      metadata: await ProductService.findAllPublishForShop({
        product_shop: req.user.userId,
        query: req.query,
      }),
    }).send(res);
  };

  searchProducts = async (req, res) => {
    new OK({
      message: 'Search product success',
      metadata: await ProductService.searchProducts(req.params),
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
