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

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});

module.exports = app;
