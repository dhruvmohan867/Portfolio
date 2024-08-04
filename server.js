const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/contact', (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  // Log environment variables for debugging
  console.log('EMAIL_USER:', process.env.EMAIL_USER);
  console.log('EMAIL_PASS:', process.env.EMAIL_PASS);

  // Create a Nodemailer transporter using Gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail address from .env
      pass: process.env.EMAIL_PASS, // Your Gmail password from .env
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, // Your Gmail address from .env
    subject: `Contact form submission from ${firstName} ${lastName}`,
    text: `You have a new contact form submission:
    Name: ${firstName} ${lastName}
    Email: ${email}
    Phone: ${phone}
    Message: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error:', error);
      res.status(500).send({ code: 500, status: 'Error sending email', error: error.toString() });
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send({ code: 200, status: 'Email sent successfully' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
