'use strict';

const express = require('express');
const ProductController = require('../../../controllers/product.controller');
const asyncHandler = require('~/middleware/async.middleware');
const authentication = require('~/middleware/auth.middleware');

const router = express.Router();

router.get(
  '/search/:keySearch',
  asyncHandler(ProductController.searchProducts)
);
router.get('/advanced-search', asyncHandler(ProductController.advancedSearch));

router.get('/:productId', asyncHandler(ProductController.getProductById));
router.get(
  '/slug/:productSlug',
  asyncHandler(ProductController.getProductBySlug)
);
router.get(
  '/product_shop/:productShop',
  asyncHandler(ProductController.getProductByShopId)
);

// Shop
router.use(authentication);
router.post('', asyncHandler(ProductController.createProduct));
router.patch('/:productId', asyncHandler(ProductController.updateProduct));

router.put(
  '/publish/:productId',
  asyncHandler(ProductController.publishProductByShop)
);
router.put(
  '/unpublish/:productId',
  asyncHandler(ProductController.unPublishProductByShop)
);

router.get('/shop/all', asyncHandler(ProductController.getAllProductForShop));

module.exports = router;
