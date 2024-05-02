const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  const [N, M] = input.shift().split(' ').map(Number);
  const arr = input.map((value) => value.replace(/\r/, ''));
  const map = {};

  for (let i = 0; i < N; i++) {
    map[i + 1] = arr[i];
    map[arr[i]] = i + 1;
  }

  for (let i = N; i < N + M; i++) {
    console.log(map[arr[i]]);
  }
};

solution();
