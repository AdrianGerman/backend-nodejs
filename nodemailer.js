const { config } = require('./config/config');

const nodemailer = require('nodemailer');

async function sendMail() {
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    secure: true,
    port: 465,
    auth: {
      user: config.mailerEmail,
      pass: config.mailerPass,
    },
  });

  let info = await transporter.sendMail({
    from: config.mailerEmail,
    to: config.mailerEmail,
    subject: 'Hola, este es un correo de prueba',
    text: 'Hello, world?',
    html: '<b>Hello, world?</b>',
  });

  console.log('Message sent: %s', info.messageId);

  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
}

sendMail();
