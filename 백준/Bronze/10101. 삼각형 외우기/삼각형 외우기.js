const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const solution = () => {
  const [first, second, third] = input;
  const deduplication = new Set([...input]);
  const check = deduplication.size === 2 ? true : false;

  if (first + second + third !== 180) return console.log('Error');
  if (first === 60 && second === 60 && third === 60) return console.log('Equilateral');
  if (check) return console.log('Isosceles');
  else return console.log('Scalene');
};

solution();
