const { setFips } = require('crypto');
const fs = require('fs');
const { getDefaultAutoSelectFamily, setDefaultAutoSelectFamily } = require('net');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const solution = () => {
  const K = input.shift();
  const stack = [];
  let sum = 0;

  for (let i = 0; i < K; i++) {
    if (input[i] === 0) {
      if (stack.length > 0) {
        sum -= stack.pop();
      }
    } else {
      sum += input[i];
      stack.push(input[i]);
    }
  }

  console.log(sum);
};

solution();
