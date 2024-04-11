const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  const N = input.shift();
  const coords = input.map((coord) => coord.split(' ').map(Number));

  coords.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });

  coords.forEach((coord, idx) => {
    coords[idx] = coord.join(' ');
  });

  console.log(coords.join('\n'));
};

solution();
