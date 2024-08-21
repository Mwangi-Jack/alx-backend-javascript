console.log('Welcome to Holberton School, what is your name?');

process.stdin.setEncoding('utf-8');

process.stdin.on('data', (input) => {
  const name = input.trim();
  if (name) {
    console.log(`Your name is: ${name}`);
  }
  if (!process.stdin.isTTY) {
    console.log('This important software is now closing');
    process.exit();
  }
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
