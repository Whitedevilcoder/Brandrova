// server/index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({ origin: '*' })); 
app.use(express.json());

// --- 1. Health Check Route ---
app.get('/', (req, res) => {
  res.status(200).send('🚀 Brandrova API is up and running!');
});

// --- 2. CRON JOB PING ROUTE ---
app.get('/api/ping', (req, res) => {
  console.log('⏰ Cron ping received. Keeping server awake...');
  res.status(200).json({ status: 'awake', time: new Date().toISOString() });
});

// --- 3. THE CONTACT FORM ROUTE (HTTPS BYPASS) ---
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill out all fields.' });
  }

  try {
    // SENIOR BYPASS: Using native HTTPS (Port 443) to blast right through Render's firewall
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_KEY,
        name: name,
        email: email,
        message: message,
        subject: `🔥 New Agency Lead from ${name}`,
        from_name: 'Brandrova Website'
      })
    });

    const data = await response.json();

    if (data.success) {
      console.log(`✅ API email successfully sent for lead: ${name}`);
      return res.status(200).json({ success: 'Message sent! We will contact you soon.' });
    } else {
      console.error('❌ Web3Forms API error:', data);
      return res.status(500).json({ error: 'Failed to send message via API.' });
    }
    
  } catch (error) {
    console.error('❌ Server error:', error);
    return res.status(500).json({ error: 'Server error. Please try again later.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Brandrova Backend running on port ${PORT}`);
});