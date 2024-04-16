const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  const [N, M] = input.shift().split(' ').map(Number);
  const S = new Set(input.slice(0, N).map((str) => str.replace(/\r/, '')));
  const compare = input.slice(N).map((str) => str.replace(/\r/, ''));
  let count = 0;

  for (const str of compare) {
    if (S.has(str)) count++;
  }

  console.log(count);
};

solution();
