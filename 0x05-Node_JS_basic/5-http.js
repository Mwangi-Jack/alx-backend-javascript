// const express = require('express');

// const port = 1245;
// const hostname = '127.0.0.1';

// const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello Holberton School!');
// });

// app.get('/students', (req, res) => {
//   res.send('This is the list of our students');
// });

// app.listen(port, () => {
//   console.log(`Server running on http://${hostname}:${port}`);
// });

const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = '1245';

const app = createServer((req, res) => {
  console.log('REQUEST::', req);
  const { method, path } = req;

  if (path === '/' && method === 'GET') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (path === '/students' && method === 'GET') {
    res.statusCode = 200;
    res.end('his is the list of our students');
  }
});

app.listen(port, hostname);

module.exports = app;
