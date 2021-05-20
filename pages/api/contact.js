export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};
export default function (req, res) {
  require("dotenv").config;


  const nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    type: "login",
    auth: {
      user: 'joportfolio12@gmail.com',
      pass: process.env.PASSWORD,
    },
    secure: true,
  });

  const textData = {
    from: 'joportfolio12@gmail.com',
    to: process.env.MYEMAIL,
    subject: "Message From " + req.body.title,
    text: req.body.message + " | Sent from: " +   req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`,
  };
  transporter.sendMail(textData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  res.send("success");
}
