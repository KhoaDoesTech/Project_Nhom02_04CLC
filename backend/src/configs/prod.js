module.exports = {
  env: process.env.NODE_ENV,
  app: {
    port: 3000,
    url: 'http://localhost:3000/',
  },
  db: {
    url: process.env.PRO_DB_URL,
  },
  mailer: {
    service: 'smtp-mail.outlook.com',
    port: 587,
    user: process.env.PRO_MAILER_USER,
    pass: process.env.PRO_MAILER_PASS,
    sender: process.env.DEV_MAILER_SENDER,
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
  cloud: {
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  },
};
