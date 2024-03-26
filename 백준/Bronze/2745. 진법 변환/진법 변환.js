const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ');

const solution = () => {
  const [target, number] = input;

  console.log(parseInt(target, number));
};

solution();
