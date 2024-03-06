'use strict';

const express = require('express');
const EmailController = require('../../../controllers/email.controller');
const asyncHandler = require('../../../middleware/asyncHandler');
const { authentication } = require('../../../middleware/auth.middleware');
const router = express.Router();

router.post('/template/create', asyncHandler(EmailController.addTemplate));
// router.patch(
//   '/template/:templateId',
//   asyncHandler(EmailController.updateTemplate)
// );
// router.post(
//   'template/publish/:id',
//   asyncHandler(EmailController.publishTemplate)
// );
// router.post('/template/edit', asyncHandler(EmailController.createTemplate));

module.exports = router;
