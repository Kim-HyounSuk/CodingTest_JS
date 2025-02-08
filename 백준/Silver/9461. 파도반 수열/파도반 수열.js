const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split("\n").map(Number);

const solution = () => {
  const T = input.shift();
  const dp = Array(101).fill(0);
  const answer = [];

  dp[1] = 1;
  dp[2] = 1;
  dp[3] = 1;

  for (let i = 4; i <= 100; i++) {
    dp[i] = dp[i - 3] + dp[i - 2];
  }

  for (let i = 0; i < T; i++) {
    answer.push(dp[input[i]]);
  }

  console.log(answer.join("\n"));
};

solution();