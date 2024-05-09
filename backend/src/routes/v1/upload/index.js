'use strict';
const express = require('express');
const UploadController = require('~/controllers/upload.controller');
const asyncHandler = require('~/middleware/async.middleware');
const authentication = require('~/middleware/auth.middleware');

const router = express.Router();

router.use(authentication);

router.post('', asyncHandler(UploadController.uploadFile));

module.exports = router;
