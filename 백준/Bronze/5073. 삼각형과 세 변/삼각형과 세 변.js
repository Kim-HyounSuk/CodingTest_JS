const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((length) =>
    length
      .split(' ')
      .map(Number)
      .sort((a, b) => b - a)
  );
input.pop();

const solution = () => {
  for (let i = 0; i < input.length; i++) {
    const [first, second, third] = input[i];
    const deduplication = new Set(input[i]);

    if (!(first < second + third)) {
      console.log('Invalid');
      continue;
    }
    if (deduplication.size === 1) {
      console.log('Equilateral');
      continue;
    }
    if (deduplication.size === 2) {
      console.log('Isosceles');
      continue;
    }
    if (deduplication.size === 3) {
      console.log('Scalene');
    }
  }
};

solution();
