// server/index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

// Middleware
// We allow localhost for testing, and we will allow any origin for now to prevent CORS errors during deployment. 
// Later, you can lock this down to just your Vercel URL!
app.use(cors({ origin: '*' })); 
app.use(express.json());

// --- Simple Health Check Route (Good for Render) ---
app.get('/', (req, res) => {
  res.status(200).send('🚀 Brandrova API is up and running!');
});

// --- THE CONTACT FORM ROUTE ---
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill out all fields.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // Sends the lead to your own inbox
      subject: `New Agency Lead: ${name}`,
      text: `
        You have a new lead from the Brandrova website!
        
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    console.log('Received Lead:', { name, email, message });
    
    // Send success response back to React
    res.status(200).json({ success: 'Message sent successfully! We will contact you soon.' });

  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ error: 'Failed to send message. Please try again later.' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Brandrova Backend running on port ${PORT}`);
});