'use strict';

const dev = {
  mailer: {
    service: process.env.DEV_MAILER_SERVICE,
    user: process.env.DEV_MAILER_USER,
    pass: process.env.DEV_MAILER_PASS,
    port: process.env.DEV_MAILER_PORT,
  },
};

const pro = {
  mailer: {
    service: process.env.PRO_MAILER_SERVICE,
    user: process.env.PRO_MAILER_USER,
    pass: process.env.PRO_MAILER_PASS,
    port: process.env.PRO_MAILER_PORT,
  },
};

const config = { dev, pro };
const env = process.env.NODE_ENV || 'dev';

module.exports = config[env];
