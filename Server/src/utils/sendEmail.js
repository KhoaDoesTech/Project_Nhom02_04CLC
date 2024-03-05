const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const path = require('path');

const mailerService = process.env.MAILER_SERVICE;
const mailerUsername = process.env.MAILER_AUTH_USER;
const mailerPassword = process.env.MAILER_AUTH_PASS;

//initializations
const mailConfig = {
  host: mailerService,
  port: 2525,
  auth: {
    user: mailerUsername,
    pass: mailerPassword,
  },
};

const transporter = nodemailer.createTransport(mailConfig);
const templateDir = path.resolve('src/templates/email');

// point to the template folder
const handlebarOptions = {
  viewEngine: {
    partialsDir: templateDir,
    defaultLayout: false,
  },
  viewPath: templateDir,
};

// use a template file with nodemailer
transporter.use('compile', hbs(handlebarOptions));

const sendEmail = async (receiver, subject, templateName, context) => {
  return transporter.sendMail({
    from: mailerUsername,
    to: receiver,
    subject,
    template: templateName,
    context,
  });
};

//send email
const sendWithOtpTemplate = async (email, otp) => {
  const subject = `Mã xác minh của bạn là: ${otp}`;
  const templateName = 'otp';

  return await sendEmail(email, subject, templateName, { otpCode: otp });
};

const sendWithWelcomeTemplate = async (userInfo) => {
  const subject = `Let’s Share and Care, ${userInfo.usr_name}`;
  const templateName = 'welcome';

  return await sendEmail(userInfo.usr_email, subject, templateName, {
    otpCode: userInfo.usr_name,
  });
};
module.exports = {
  sendWithOtpTemplate,
  sendWithWelcomeTemplate,
};
