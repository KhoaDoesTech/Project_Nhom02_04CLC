'use strict';

const nodemailer = require('nodemailer');
const {
  mailer: { service, user, pass },
} = require('../configs/config.nodemailer');

console.log(service);

const mailConfig = {
  host: service,
  port: 2525,
  // secure: true,
  auth: {
    user: user,
    pass: pass,
  },
};

const transporter = nodemailer.createTransport(mailConfig);

module.exports = transporter;
