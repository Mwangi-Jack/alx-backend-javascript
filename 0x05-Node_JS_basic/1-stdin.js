process.stdin.setEncoding('utf-8');
console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (data) => {
  console.log(`Your name is: ${data}`);
});

process.on('exit', () => {
  console.log('This important software is now closing');
});