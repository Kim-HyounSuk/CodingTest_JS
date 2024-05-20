const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split(' ').map(Number);

const solution = () => {
  const [N, K] = input;
  const list = [];
  const answer = [];

  for (let i = 1; i < N + 1; i++) {
    list.push(i);
  }

  while (list.length) {
    let count = 1;

    while (count < K) {
      list.push(list.shift());
      count++;
    }

    answer.push(list.shift());
  }

  console.log(`<${answer.join(', ')}>`);
};

solution();
