const express = require('express');
const path = require('path');

const app = express();
const PORT = 5000;

// Serve static files from public directory
app.use(express.static('public'));

// Ensure proper MIME types for JS files
app.use('/dist', express.static('public/dist', {
  setHeaders: (res, path) => {
    if (path.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
  }
}));

// Serve src files for development
app.use('/src', express.static('src'));

// API endpoint to serve news data
app.get('/api/news', (req, res) => {
  try {
    const newsData = require('./src/data/news.json');
    res.json(newsData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load news data' });
  }
});

// API endpoint to serve team data
app.get('/api/team', (req, res) => {
  try {
    const teamData = require('./src/data/team.json');
    res.json(teamData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load team data' });
  }
});

// API endpoint to serve hero slides data
app.get('/api/hero-slides', (req, res) => {
  try {
    const heroData = require('./src/data/heroSlides.json');
    res.json(heroData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load hero slides data' });
  }
});

// Handle all routes by serving index.html (for React Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`GMB Landing Page server running on http://0.0.0.0:${PORT}`);
  console.log(`Visit: http://localhost:${PORT}`);
});