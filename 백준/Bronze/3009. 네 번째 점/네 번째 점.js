const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((value) => value.split(' ').map(Number));

const solution = () => {
  const checker = [[], []];
  let [checkX, checkY] = checker;

  input.forEach((coord) => {
    const [x, y] = coord;

    !checkX[x] ? (checkX[x] = 1) : (checkX[x] = 2);
    !checkY[y] ? (checkY[y] = 1) : (checkY[y] = 2);
  });

  answer = [checkX.findIndex((num) => num === 1), checkY.findIndex((num) => num === 1)];

  console.log(...answer);
};

solution();
