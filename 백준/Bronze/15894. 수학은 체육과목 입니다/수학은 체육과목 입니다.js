const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

const solution = () => {
  const num = Number(input);
  console.log(4 * num);
};

solution();
