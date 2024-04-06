const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number)
  .sort((a, b) => b - a);

const solution = () => {
  const [a, b, c] = input;

  if (a < b + c) return console.log(a + b + c);
  else return console.log(2 * (b + c) - 1);
};

solution();
