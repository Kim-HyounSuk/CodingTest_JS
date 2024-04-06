const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  const N = Number(input.shift());
  const coords = input.map((coord) => coord.split(' ').map(Number));

  if (N < 2) return console.log(0);

  let [minX, maxX] = [];
  let [minY, maxY] = [];

  coords.forEach((coord) => {
    const [x, y] = coord;

    !minX ? (minX = x) : (minX = Math.min(minX, x));
    !maxX ? (maxX = x) : (maxX = Math.max(maxX, x));
    !minY ? (minY = y) : (minY = Math.min(minY, y));
    !maxY ? (maxY = y) : (maxY = Math.max(maxY, y));
  });

  console.log((maxX - minX) * (maxY - minY));
};

solution();
