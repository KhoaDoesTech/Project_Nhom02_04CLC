'use strict';

const { OK } = require('../helpers/success.response');
const UploadService = require('../services/upload.service');

class UploadController {
  uploadFile = async (req, res, next) => {
    new OK({
      message: 'List Cart success',
      metadata: await UploadService.uploadImageFromUrl(),
    }).send(res);
  };
}

module.exports = new UploadController();
