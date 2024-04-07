const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

const solution = () => {
  const N = Number(input);
  const dp = new Array(1000001);

  for (let i = 0; i < 1000001; i++) {
    const str = String(i);
    sum = i;

    for (let i = 0; i < str.length; i++) {
      sum += Number(str[i]);
    }

    dp[i] = sum;
  }

  const M = dp.findIndex((value) => value === N);

  M !== -1 ? console.log(M) : console.log(0);
};

solution();
