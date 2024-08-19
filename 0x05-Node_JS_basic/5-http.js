const express = require('express');

const port = 1245;
const hostname = '127.0.0.1';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.send('This is the list of our students');
});

app.listen(port, () => {
  console.log(`Server running on http://${hostname}:${port}`);
});
