const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input = line.split(' ');
}).on('close', () => {
  for (let i = 1; i <= input; i++) {
    console.log('*'.repeat(i));
  }
});