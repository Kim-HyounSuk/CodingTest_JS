const { setFips } = require('crypto');
const fs = require('fs');
const { getDefaultAutoSelectFamily, setDefaultAutoSelectFamily } = require('net');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((value) => value.split(' ').map(Number));

const solution = () => {
  const N = Number(input.shift());
  const stack = [];
  const answer = [];

  for (let i = 0; i < N; i++) {
    const [command, value] = input[i];
    if (command === 1) {
      stack.push(value);
    }

    if (command === 2) {
      if (!(stack.length > 0)) {
        answer.push(-1);
      } else {
        answer.push(Number(stack.pop()));
      }
    }

    if (command === 3) {
      answer.push(stack.length);
    }

    if (command === 4) {
      if (stack.length > 0) answer.push(0);
      else answer.push(1);
    }

    if (command === 5) {
      if (stack.length > 0) answer.push(Number(stack[stack.length - 1]));
      else answer.push(-1);
    }
  }

  console.log(answer.join('\n'));
};

solution();
