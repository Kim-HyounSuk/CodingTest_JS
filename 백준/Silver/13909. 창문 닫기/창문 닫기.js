const { setFips } = require('crypto');
const fs = require('fs');
const { getDefaultAutoSelectFamily, setDefaultAutoSelectFamily } = require('net');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

const solution = () => {
  const N = Number(input);
  let answer = 0;

  // 제곱수인 창문은 무조건 열림(약수의 갯수가 홀수 개이므로)
  for (let i = 1; i <= parseInt(Math.sqrt(N)); i++) {
    answer++;
  }

  console.log(answer);
};

solution();
