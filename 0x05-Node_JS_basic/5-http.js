const http = require('http');
const countStudents = require('./3-read_file_async');

const port = 1245;
const path = process.argv[2];

// const app = http.createServer((req, res) => {
//   const { method, url } = req;

//   if (url === '/' && method === 'GET') {
//     res.statusCode = 200;
//     res.end('Hello Holberton School!');
//   } else if (url === '/students' && method === 'GET') {
//     countStudents(db).then((data) => {
//       res.statusCode = 200;
//       res.end(`This is the list of our students\n${data}`);
//     })
//       .catch((err) => {
//         res.statusCode = 404;
//         res.end(err.message);
//       });
//   }
// });

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');

    countStudents(path)
      .then(() => {
        res.end();
      })
      .catch((err) => {
        res.write(err.message);
        res.end();
      });
  }
});

app.listen(port);

module.exports = app;
