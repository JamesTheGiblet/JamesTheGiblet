require('dotenv').config(); // Loads environment variables from .env file
const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const CULTS3D_API_KEY = process.env.Cults3d_api;
// NOTE: This is a placeholder URL. You must check the Cults3D API documentation
// for the correct endpoint and query format.
const CULTS3D_API_URL = 'https://cults3d.com/graphql';

// Serve all static files (HTML, CSS, JS, images) from the project root
app.use(express.static(path.join(__dirname)));

// Create an API endpoint to proxy requests to Cults3D
app.get('/api/cults3d-models', async (req, res) => {
  if (!CULTS3D_API_KEY) {
    return res.status(500).json({ error: 'API key not configured on the server.' });
  }

  // Define the GraphQL query to fetch your creations
  const query = `query {
    creations(limit: 20) {
      name
      url
      short_description: description(truncate: 150)
      images(limit: 1) {
        url
      }
    }
  }`;

  // The API expects the query in a form-urlencoded body.
  const params = new URLSearchParams();
  params.append('query', query);

  try {
    const response = await axios.post(CULTS3D_API_URL, params, {
      // Use HTTP Basic Auth with the API key as the username
      auth: {
        username: CULTS3D_API_KEY,
        password: '' // No password for API key auth
      },
      headers: {
        // The content type for URL-encoded form data
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    // The actual data is nested under `data.creations` in the GraphQL response
    res.json(response.data.data.creations);
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('Cults3D API Error:', error.response.status, error.response.data);
      return res.status(error.response.status).json(error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No response from Cults3D API:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('Error setting up request to Cults3D API:', error.message);
    }
    res.status(500).json({ error: 'Failed to fetch data from Cults3D API.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running. Visit http://localhost:${PORT}/artifacts.html`);
});