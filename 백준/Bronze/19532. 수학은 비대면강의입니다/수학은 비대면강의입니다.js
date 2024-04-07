const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const solution = () => {
  const [a, b, c, d, e, f] = input;

  for (let x = -999; x < 1000; x++) {
    for (let y = -999; y < 1000; y++) {
      if (a * x + b * y === c && d * x + e * y === f) return console.log(`${x} ${y}`);
    }
  }
};

solution();
