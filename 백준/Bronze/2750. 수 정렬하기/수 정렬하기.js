const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  const N = input.shift();

  input.sort((a, b) => a - b);

  input.forEach((num) => console.log(num));
};

solution();