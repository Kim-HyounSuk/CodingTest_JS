const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  const sum = input.reduce((acc, num) => {
    return acc + Number(num);
  }, 0);
  input.sort((a, b) => a - b);

  console.log(sum / 5);
  console.log(input[2]);
};

solution();
