const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;
const db = process.argv[2];


app.get('/', (req, res) => {
  res.statusCode = 200;
  res.end('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(db).then((data) => {
    res.statusCode = 200;
    res.end(`This is the list of our students\n${data}`);
  });
});

app.listen(port);
