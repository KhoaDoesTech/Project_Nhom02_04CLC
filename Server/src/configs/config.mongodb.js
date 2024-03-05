'use strict';

const dev = {
  app: {
    port: process.env.DEV_APP_PORT,
  },
  db: {
    url: process.env.DEV_DB_URL,
  },
};

const pro = {
  app: {
    port: process.env.PRO_APP_PORT,
  },
  db: {
    url: process.env.PRO_DB_URL,
  },
};

const config = { dev, pro };
const env = process.env.NODE_ENV || 'dev';

module.exports = config[env];
