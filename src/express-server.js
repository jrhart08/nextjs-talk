const express = require('express');
const { parse } = require('url')
const next = require('next');
const getAnimalFact = require('./api-handlers/animalFact').default;

const port = 3000;
const nextApp = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const server = express();

  // api
  server.get('/api/animalfact', getAnimalFact);

  // page server (standard next.js behavior)
  server.get('*', (req, res) => {
    const parsedUrl = parse(req.url, true)
    return handle(req, res, parsedUrl);
  });

  // start server
  server.listen(port, err => {
    if (err) {
      throw err;
    }
    
    console.log(`> Ready on http://localhost:${port}`);
  });
});
