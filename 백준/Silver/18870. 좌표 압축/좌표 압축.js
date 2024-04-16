const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  const N = Number(input.shift());
  const arr = input.shift().split(' ').map(Number);

  const sequence = [...new Set(arr)].sort((a, b) => a - b);
  const obj = {};
  let answer = [];

  sequence.forEach((value, idx) => {
    obj[value] = idx;
  });

  arr.forEach((value) => {
    answer.push(obj[value]);
  });

  console.log(answer.join(' '));
};

solution();
