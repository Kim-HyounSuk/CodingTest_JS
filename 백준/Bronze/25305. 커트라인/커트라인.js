const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  const [N, k] = input.shift().split(' ').map(Number);
  const scores = input.shift().split(' ').map(Number);

  scores.sort((a, b) => b - a);
  console.log(scores[k - 1]);
};

solution();
