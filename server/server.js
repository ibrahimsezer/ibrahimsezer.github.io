require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration
const allowedOrigins = [
  'https://ibrahimsezer.github.io',  // Your GitHub Pages URL
  'http://localhost:3000',           // Local development
  'http://localhost:5000'            // Local backend
];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.use(express.json());

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ status: 'Server is running' });
});

// GitHub API endpoint
app.get('/api/github/contributions/:username', async (req, res) => {
    try {
        const { username } = req.params;
        const response = await axios.post(
            'https://api.github.com/graphql',
            {
                query: `
                    query {
                        user(login: "${username}") {
                            contributionsCollection {
                                contributionCalendar {
                                    totalContributions
                                    weeks {
                                        contributionDays {
                                            contributionCount
                                            date
                                        }
                                    }
                                }
                            }
                        }
                    }
                `
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
                    'Content-Type': 'application/json',
                }
            }
        );

        res.json(response.data);
    } catch (error) {
        console.error('Error fetching GitHub contributions:', error);
        res.status(500).json({ error: 'Failed to fetch GitHub contributions' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
