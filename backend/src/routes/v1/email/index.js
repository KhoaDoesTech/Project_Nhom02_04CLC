'use strict';

const express = require('express');
const EmailController = require('../../../controllers/email.controller');
import asyncHandler from '~/middleware/async.middleware';
import authentication from '~/middleware/auth.middleware';
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
