'use strict';

const transporter = require('../dbs/init.nodemailer');
const { NotFoundError } = require('../helpers/error.response');
const {
  getTemplate,
  findTemplateByTag,
} = require('../models/repositories/template.repo');
const { replacePlaceholder } = require('./misc');

const sendEmail = async ({ html, toEmail, subject, attachments = [] }) => {
  try {
    const mailOptions = {
      from: '"ShareAndCare" <khoahoc72@gmail.com>',
      to: toEmail,
      subject,
      html,
      attachments,
    };

    await transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err);
      }
      console.log(`Message sent::: ${info.messageId}`);
    });
  } catch (error) {
    console.log(`Error send Email::: ${error}`);
    return error;
  }
};

const sendOtpEmail = async ({ email, otp }) => {
  const template = await findTemplateByTag('otp');
  if (!template) throw new NotFoundError('Template not found');

  const content = replacePlaceholder(template.tem_html, {
    otpCode: otp,
  });

  await sendEmail({
    html: content,
    toEmail: email,
    subject: `Mã xác minh của bạn là: ${otp}`,
  });

  return 1;
};

const sendWelcomeEmail = async (user) => {
  const template = await findTemplateByTag('welcome');
  if (!template) throw new NotFoundError('Template not found');

  const content = replacePlaceholder(template.tem_html, {
    userName: user.usr_name,
  });

  await sendEmail({
    html: content,
    toEmail: user.usr_email,
    subject: `Welcome to ShareAndCare, ${user.usr_name}`,
  });

  return 1;
};

const sendUrlEmail = async ({ email, url }) => {
  const template = await findTemplateByTag('url');
  if (!template) throw new NotFoundError('Template not found');

  const content = replacePlaceholder(template.tem_html, {
    resetPasswordUrl: url,
  });

  await sendEmail({
    html: content,
    toEmail: email,
    subject: `Reset Password Link`,
  });

  return 1;
};

const sendSuccessEmail = async (email) => {
  const template = await findTemplateByTag('success');
  if (!template) throw new NotFoundError('Template not found');

  await sendEmail({
    html: template.tem_html,
    toEmail: email,
    subject: `Password Reset Successfully`,
  });

  return 1;
};

module.exports = {
  sendEmail,
  sendOtpEmail,
  sendWelcomeEmail,
  sendUrlEmail,
  sendSuccessEmail,
};
