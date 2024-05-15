const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const solution = () => {
  const N = Number(input.shift());
  const line = input[0].split(' ').map(Number);
  let sequence = 1;
  const stack = [];

  while (true) {
    while (stack.length) {
      const num = stack.pop();

      if (num !== sequence) {
        stack.push(num);
        break;
      }
      
      sequence++;
    }

    if (line.length) stack.push(line.shift());
    if (!line.length && stack[stack.length - 1] !== sequence) break;
  }

  !stack.length ? console.log('Nice') : console.log('Sad');
};

solution();
