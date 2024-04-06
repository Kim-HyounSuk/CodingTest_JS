const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const solution = () => {
  let [x, y, w, h] = input;

  console.log(Math.min(Math.abs(x - w), Math.abs(y - h), x, y));
};

solution();
