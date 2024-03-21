'use strict';

/* eslint-disable no-unused-vars */
import { StatusCodes } from 'http-status-codes';
// import { env } from '~/config/environment'

const errorHandler = (err, req, res, next) => {
  const statusCode = err.status || StatusCodes.INTERNAL_SERVER_ERROR;

  const responseError = {
    code: statusCode,
    message: err.message || StatusCodes[err.statusCode],
    stack: err.stack,
    metadata: err.metadata,
  };

  // if (env.BUILD_MODE !== 'dev') delete responseError.stack

  res.status(responseError.code).json(responseError);
};

module.exports = errorHandler;
