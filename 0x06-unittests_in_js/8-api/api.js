const express = require('express');

app = express();

app.get('/', (req, res) => {
	res.statusCode = 200
	res.end('Welcome to the payment system');
})

app.listen(7865, () => {
	console.log('API available on localhost port 7865');
})


module.exports = app;
