const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  const n = Number(input.shift());
  const records = input.map((value) => value.split(' ')[0]);
  const inner = new Set();

  records.forEach((name) => {
    inner.has(name) ? inner.delete(name) : inner.add(name);
  });

  console.log([...inner].sort().reverse().join('\n'));
};

solution();
