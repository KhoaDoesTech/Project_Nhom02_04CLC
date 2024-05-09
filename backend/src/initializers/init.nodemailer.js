'use strict';

const nodemailer = require('nodemailer');
const {
  mailer: { service, user, pass, port },
} = require('../configs/environment');

const mailConfig = {
  host: service,
  secureConnection: false, // TLS requires secureConnection to be false
  port: port,
  auth: {
    user: user,
    pass: pass,
  },
  tls: {
    ciphers: 'SSLv3',
    rejectUnauthorized: false,
  },
};

const transporter = nodemailer.createTransport(mailConfig);

module.exports = transporter;
