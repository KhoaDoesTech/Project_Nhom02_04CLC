module.exports = {
  env: process.env.NODE_ENV,
  app: {
    port: 3000,
    url: 'http://localhost:3000/',
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
  paypal: {
    url: process.env.DEV_PAYPAL_URL,
    clientId: process.env.DEV_PAYPAL_CLIENT_ID,
    clientSecret: process.env.DEV_PAYPAL_CLIENT_SECRET,
  },
  discord: {
    token: process.env.DISCORD_TOKEN,
    channelId: process.env.DISCORD_CHANNEL_ID,
  },
};
