'use strict';

const transporter = require('../initializers/init.nodemailer');
const { NotFoundError } = require('../helpers/error.response');
const { findTemplateByTag } = require('../models/repositories/template.repo');
const { replacePlaceholder } = require('./misc');

const sendEmail = async ({ html, toEmail, subject, attachments = [] }) => {
  try {
    const mailOptions = {
      from: '"ShareAndCare" <shareandcareteam@hotmail.com>',
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

const sendTemplateEmail = async ({ email, tag, params = null }) => {
  const template = await findTemplateByTag(tag);
  if (!template) throw new NotFoundError('Template not found');

  const subject = params
    ? replacePlaceholder(template.tem_subject, params)
    : template.tem_subject;
  const content = params
    ? replacePlaceholder(template.tem_html, params)
    : template.tem_html;

  await sendEmail({
    subject,
    toEmail: email,
    html: content,
  });

  return 1;
};

module.exports = {
  sendEmail,
  sendTemplateEmail,
};
