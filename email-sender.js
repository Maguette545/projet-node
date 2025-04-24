const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'maguettethiao23@gmail.com',
    pass: 'qwdo qibq anzs frxq'
  }
});

let mailOptions = {
  from: 'maguettethiao23@gmail.com',
  to: 'moussa2023dieng@icloud.com',
  subject: 'Test Node.js',
  text: 'Email envoyé depuis Node.js !'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email envoyé: ' + info.response);
  }
});

