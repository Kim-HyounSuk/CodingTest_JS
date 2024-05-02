const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  const [nA, nB] = input.shift().split(' ').map(Number);
  const [A, B] = input.map((set) => set.split(' ').map(Number));
  const union = new Set([...A, ...B]).size;

  // A-B의 원소 갯수 + B-A의 원소 갯수
  console.log(union - nB + union - nA);
};

solution();
