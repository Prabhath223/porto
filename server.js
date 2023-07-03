const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Disable SSL verification
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

// Endpoint for handling form submission
app.post('/send-email', (req, res) => {
  const { name, email, subject, phone, message } = req.body;

  // Create a transporter for sending emails
  const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: 'nagulaprabhath@hotmail.com',
      pass: 'Asd@3211',
    },
  });

  // Define the email options
  const mailOptions = {
    from: 'nagulaprabhath@hotmail.com',
   //please update this below field with your(recievers email to test the project) 
   to: 'prabhathdeechu@gmail.com',  
    subject: 'New Form Submission',
    text: `
      Name: ${name}
      Email: ${email}
      Subject: ${subject}
      Phone: ${phone}
      Message: ${message}
    `,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

// Handle GET requests to the root URL
app.get('/', (req, res) => {
  res.send('Server is running. Use POST /send-email to submit a form.');
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
