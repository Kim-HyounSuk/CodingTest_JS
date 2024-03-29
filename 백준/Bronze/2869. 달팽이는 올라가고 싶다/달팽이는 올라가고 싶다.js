const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const solution = () => {
  const [A, B, V] = input;
  const answer = Math.ceil((V - B) / (A - B));

  console.log(answer);
};

solution();
