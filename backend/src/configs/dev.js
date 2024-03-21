module.exports = {
  env: process.env.NODE_ENV,
  app: {
    port: 8081,
    url: 'http://localhost:8081/',
  },
  db: {
    url: process.env.DEV_DB_URL,
  },
  mailer: {
    service: 'smtp.mailtrap.io',
    port: 2525,
    user: process.env.DEV_MAILER_USER,
    pass: process.env.DEV_MAILER_PASS,
  },
};
