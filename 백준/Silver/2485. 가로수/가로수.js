const { setFips } = require('crypto');
const fs = require('fs');
const { getDefaultAutoSelectFamily, setDefaultAutoSelectFamily } = require('net');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const getGCD = (x, y) => {
  if (y === 0) return x;
  else return getGCD(y, x % y);
};

const solution = () => {
  const N = input.shift();
  const arr = input;
  let answer = 0;
  let dist = [];
  let gcd = 0;

  for (let i = 0; i < N - 1; i++) {
    const gap = arr[i + 1] - arr[i];
    dist.push(gap);
    gcd = getGCD(Math.max(gcd, gap), Math.min(gcd, gap));
  }

  dist.forEach((gap) => {
    answer += gap / gcd - 1;
  });

  console.log(answer);
};

solution();
