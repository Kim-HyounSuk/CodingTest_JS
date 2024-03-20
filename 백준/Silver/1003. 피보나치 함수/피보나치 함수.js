const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const cases = input.shift();

const dp = [
  [1, 0],
  [0, 1],
];

const Fn = (number) => {
  if (number < 2) return dp;

  for (let i = 2; i < number; i++) {
    dp.push([dp[i - 1][0] + dp[i - 2][0], dp[i - 1][1] + dp[i - 2][1]]);
  }

  return dp;
};

Fn(41);

for (let i = 0; i < cases; i++) {
  console.log(dp[input[i]].join(' '));
}