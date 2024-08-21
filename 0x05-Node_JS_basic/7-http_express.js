const express = require('express');
const { countStudents } = require('./3-read_file_async');

const app = express();
const databaseFile = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');
  countStudents(databaseFile)
    .then((data) => {
      res.end(data);
    })
    .catch((err) => {
      res.end(err.message);
    });
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
