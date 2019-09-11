// core module readline
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// method that asks a question and expects an answer
rl.question('What is Love?\nA: ', answer => {
  // answer = Baby don't hurt me
  console.log(`Your answer: ${answer}`);
  process.exit();
});
