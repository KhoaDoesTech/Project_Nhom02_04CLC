module.exports = {
  env: process.env.NODE_ENV,
  app: {
    port: 8082,
    url: 'http://localhost:8082/',
  },
  db: {
    url: process.env.PRO_DB_URL,
  },
  mailer: {
    service: 'smtp-mail.outlook.com',
    port: 587,
    user: process.env.PRO_MAILER_USER,
    pass: process.env.PRO_MAILER_PASS,
  },
};
