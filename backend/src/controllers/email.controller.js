'use strict';

const { CREATED } = require('../helpers/success.response');
const EmailService = require('../services/email.service');

class EmailController {
  addTemplate = async (req, res, next) => {
    new CREATED({
      message: 'Create new template success',
      metadata: await EmailService.addTemplate(req.body),
    }).send(res);
  };
}

module.exports = new EmailController();
