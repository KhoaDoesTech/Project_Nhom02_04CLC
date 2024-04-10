const { WHITELIST_DOMAINS } = require('../constants/index');
const { env } = require('./environment');
const { ForbiddenError } = require('../helpers/error.response');

const corsOptions = {
  origin: function (origin, callback) {
    // if (!origin && env === 'dev') {
    //   return callback(null, true);
    // }

    if (!origin) {
      return callback(null, true);
    }

    if (WHITELIST_DOMAINS.includes(origin)) {
      return callback(null, true);
    }

    return callback(
      new ForbiddenError(`${origin} not allowed by our CORS Policy.`)
    );
  },

  optionsSuccessStatus: 200,

  credentials: true,
};

module.exports = corsOptions;
