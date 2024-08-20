const http = require('http');
const countStudents = require('./3-read_file_async');

const port = 1245;

const app = http.createServer((req, res) => {
  const { method, url } = req;

  if (url === '/' && method === 'GET') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (url === '/students' && method === 'GET') {
    countStudents('database.csv').then((data) => {
      res.statusCode = 200;
      res.end(`This is the list of our students\n${data}`);
    });
  }
});

app.listen(port);

module.exports = app;
