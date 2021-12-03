require('dotenv').config()

exports.send = async (text, emails) => {
  let nodemailer = require("nodemailer");

  let transporter = nodemailer.createTransport({

    service: 'gmail',
    port: 587,
    tls: {rejectUnauthorized: false},
    secureConnection: false,
    auth: {
      user: "",
      pass: "",
    },
  });

  transporter.verify(function (error, success) {
    if (error) {
      return error;
    } else {
      console.log("Success");
    }
  });

  return await transporter.sendMail({
    from: '',
    to: emails,
    subject: 'Cool Website Approving',
    text: text
  });
}
