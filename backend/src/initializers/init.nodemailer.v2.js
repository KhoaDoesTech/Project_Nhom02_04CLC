'use strict';

const nodemailer = require('nodemailer');
import * as aws from '@aws-sdk/client-ses';
const {
  mailerV2: { user, pass },
} = require('../configs/environment');

const ses = new aws.SES({
  apiVersion: '2010-12-01',
  region: 'ap-southeast-1', // Your region will need to be updated
  credentials: {
    accessKeyId: user,
    secretAccessKey: pass,
  },
});

// create Nodemailer SES transporter
const transporter = nodemailer.createTransport({
  SES: { ses, aws },
});

module.exports = transporter;
