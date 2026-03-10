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
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Please fill out all fields.' });
    }

    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true, // true for 465, forces standard SSL connection
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
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

        await transporter.sendMail(mailOptions);
        console.log('Received Lead:', { name, email, message });
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