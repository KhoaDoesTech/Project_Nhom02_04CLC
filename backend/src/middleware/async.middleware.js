'use strict';
const Logger = require('~/utils/discord');

const asyncHandler = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);

    Logger.sendRequestLog({
      url: `URL: ${req.get('host')}${req.originalUrl}`,
      ip: `${req.ip}`,
      title: `Method: ${req.method}`,
      query: req.query,
      body: req.body,
    });
  };
};

module.exports = asyncHandler;
