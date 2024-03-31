'use strict';

const express = require('express');
const ProductController = require('../../../controllers/product.controller');
const asyncHandler = require('../../../middleware/async.middleware');
const { authentication } = require('../../../middleware/auth.middleware');
const router = express.Router();

router.get(
  '/search/:keySearch',
  asyncHandler(ProductController.searchProducts)
);
router.get('/advanced-search', asyncHandler(ProductController.advancedSearch));

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
router.get(
  '/unpublish/all',
  asyncHandler(ProductController.getAllUnPublishForShop)
);
router.get(
  '/publish/all',
  asyncHandler(ProductController.getAllPublishForShop)
);

module.exports = router;
