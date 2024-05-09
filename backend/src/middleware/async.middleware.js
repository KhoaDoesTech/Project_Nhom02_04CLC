'use strict';

const Logger = require('~/utils/discord');

const asyncHandler = (fn) => {
  return (req, res, next) => {
    let start = process.hrtime();
    fn(req, res, next).catch(next);

    Logger.sendRequestLog(
      {
        url: `Url: ${req.get('host')}${req.originalUrl}`,
        ip: `${req.ip}`,
        title: `Method: ${req.method}`,
        query: req.query,
        body: req.body,
      },
      start
    );
  };
};

module.exports = asyncHandler;
