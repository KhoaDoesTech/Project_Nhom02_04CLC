'use strict';

const Logger = require('~/utils/discord');
const { ReasonPhrases, StatusCodes } = require('http-status-codes');

class SuccessResponse {
  constructor({
    message,
    statusCode = StatusCodes.OK,
    reasonStatusCode = ReasonPhrases.OK,
    metadata = {},
  }) {
    this.message = !message ? reasonStatusCode : message;
    this.status = statusCode;
    this.metadata = metadata;
  }

  send(res) {
    Logger.sendResponseLog(
      {
        status: this.status,
        message: this.message,
      },
      'success'
    );
    return res.status(this.status).json(this);
  }
}

class OK extends SuccessResponse {
  constructor({ message, metadata }) {
    super({ message, metadata });
  }
}

class CREATED extends SuccessResponse {
  constructor({
    // options = {},
    message,
    statusCode = StatusCodes.CREATED,
    reasonStatusCode = ReasonPhrases.CREATED,
    metadata,
  }) {
    super({ message, statusCode, reasonStatusCode, metadata });
    // this.options = options;
  }
}

module.exports = {
  OK,
  CREATED,
};
