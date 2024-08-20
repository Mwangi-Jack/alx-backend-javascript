const express = require('express');

const port = 1245;

const app = express();

app.get('/', (req, res) => {
  res.statusCode = 200;
  res.send('Hello Holberton School!');
});

app.listen(port);
