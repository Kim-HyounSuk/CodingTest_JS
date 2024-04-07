const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((value) => value.split(' ').map(Number));

const [N, M] = input[0];
const data = input[1];

const selected = Array(3).fill(0);
const visited = Array(N).fill(0);
let max = 0;

const DFS = (depth) => {
  if (depth === 3) {
    const partSum = selected[0] + selected[1] + selected[2];

    if (partSum > M) return;
    else {
      max = Math.max(max, partSum);
      return;
    }
  }

  for (let i = depth; i < N; i++) {
    if (visited[i] === 0) {
      selected[depth] = data[i];
      visited[i] = 1;
      DFS(depth + 1);

      visited[i] = 0;
      selected[depth] = 0;
    }
  }
};

const solution = () => {
  DFS(0);
  console.log(max);
};

solution();
