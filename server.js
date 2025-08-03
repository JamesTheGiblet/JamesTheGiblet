require('dotenv').config(); // Loads environment variables from .env file
const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const CULTS3D_API_KEY = process.env.Cults3d_api;
// NOTE: This is a placeholder URL. You must check the Cults3D API documentation
// for the correct endpoint to fetch your creations.
const CULTS3D_API_URL = 'https://cults3d.com/api/v1/me/creations'; // EXAMPLE URL

// Serve all static files (HTML, CSS, JS, images) from the project root
app.use(express.static(path.join(__dirname)));

// Create an API endpoint to proxy requests to Cults3D
app.get('/api/cults3d-models', async (req, res) => {
  if (!CULTS3D_API_KEY) {
    return res.status(500).json({ error: 'API key not configured on the server.' });
  }

  try {
    // NOTE: Check Cults3D API docs for the correct authorization method.
    // It might be 'Bearer', 'X-Api-Key', or something else.
    const response = await axios.get(CULTS3D_API_URL, {
      headers: {
        'Authorization': `Bearer ${CULTS3D_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching from Cults3D API:', error.message);
    res.status(500).json({ error: 'Failed to fetch data from Cults3D API.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running. Visit http://localhost:${PORT}/artifacts.html`);
});