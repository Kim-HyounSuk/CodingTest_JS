const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

// 한 줄의 사각형 갯수 = 2**n
// 한 줄의 꼭짓점 갯수 = 한 줄의 사각형의 갯수 = 2**n + 1
// 총 꼭짓점의 갯수 = (한 줄의 꼭지점 갯수)**2 = (2**n + 1)**2

const number = input[0];

const solution = () => {
  console.log((2 ** number + 1) ** 2);
};

solution();