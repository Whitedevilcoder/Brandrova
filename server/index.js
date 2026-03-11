// server/index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

// Middleware
app.use(cors({ origin: '*' }));
app.use(express.json());

// --- 1. Health Check Route (General Status) ---
app.get('/', (req, res) => {
    res.status(200).send('🚀 Brandrova API is up and running!');
});

// --- 2. CRON JOB PING ROUTE (Keeps Render Awake) ---
app.get('/api/ping', (req, res) => {
    console.log('⏰ Cron ping received. Keeping server awake...');
    res.status(200).json({ status: 'awake', time: new Date().toISOString() });
});

// --- 3. THE CONTACT FORM ROUTE ---
// --- THE CONTACT FORM ROUTE (SENIOR ARCHITECTURE) ---
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  // 1. Instant Validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill out all fields.' });
  }

  // 2. Setup the Transport with the Port 587 Bypass
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587, // Switched from 465 to 587
    secure: false, // Must be false for 587
    requireTLS: true, // Forces secure connection after bypassing the firewall
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    connectionTimeout: 10000, // Kills the connection if it hangs longer than 10s
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `New Agency Lead: ${name}`,
    text: `
      You have a new lead from the Brandrova website!
      
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  // 3. THE "FIRE AND FORGET" ALGORITHM
  // Notice there is NO 'await' here. We execute this in the background.
  transporter.sendMail(mailOptions)
    .then(() => {
      console.log(`✅ Background email successfully sent for lead: ${name}`);
    })
    .catch((error) => {
      console.error('❌ Background email failed:', error);
      // Even if this fails in the background, the user doesn't get stuck staring at a loading screen.
    });

  // 4. INSTANT RESPONSE TO FRONTEND
  // We send the success message back to React immediately. The UI updates instantly.
  return res.status(200).json({ success: 'Message sent! We will contact you soon.' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Brandrova Backend running on port ${PORT}`);
});