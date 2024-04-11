const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  const N = Number(input.shift());
  const words = [...new Set(input.map((word) => word.replace(/\r/, '')))];

  words.sort((a, b) => {
    if (a.length === b.length) {
      if (a < b) return -1;
      else if (a > b) return 1;
      else return 0;
    }
    return a.length - b.length;
  });

  console.log(words.join('\n'));
};

solution();
