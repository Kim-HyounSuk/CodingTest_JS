const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((item) => item.split(' ').map(Number));

const solution = () => {
  for (let i = 0; i < input.length - 1; i++) {
    const [target, compare] = input[i];

    if (compare % target === 0) {
      console.log('factor');
    } else if (target % compare === 0) {
      console.log('multiple');
    } else {
      console.log('neither');
    }
  }
};

solution();
