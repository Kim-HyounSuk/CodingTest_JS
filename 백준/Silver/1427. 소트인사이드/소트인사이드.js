const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('');

const solution = () => {
  const str = input.sort((a, b) => b - a).join('');
  console.log(str);
};

solution();
