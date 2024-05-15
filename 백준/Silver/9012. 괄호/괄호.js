const { setFips } = require('crypto');
const fs = require('fs');
const { getDefaultAutoSelectFamily, setDefaultAutoSelectFamily } = require('net');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  const T = Number(input.shift());
  const arr = input.map((value) => value.replace(/\r/, '').split(''));
  const answer = [];

  for (let i = 0; i < T; i++) {
    const stack = [];

    for (let j = 0; j < arr[i].length; j++) {
      const bracket = arr[i][j];

      if (stack.length > 0) {
        if (bracket === '(') stack.push('(');
        else {
          if (stack[stack.length - 1] === '(') stack.pop();
          else {
            stack.push(')');
            break;
          }
        }
      } else {
        if (bracket === '(') stack.push('(');
        if (bracket === ')') {
          stack.push(')');
          break;
        }
      }
    }

    stack.length > 0 ? answer.push('NO') : answer.push('YES');
  }

  console.log(answer.join('\n'));
};

solution();
