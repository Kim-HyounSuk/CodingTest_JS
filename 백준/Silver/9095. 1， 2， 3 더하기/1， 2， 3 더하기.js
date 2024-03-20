const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);
const cases = input.shift();

const sample = [0, 1, 2, 4];

for (let i = 0; i < cases; i++) {
  const num = input[i];
  for (let j = 4; j <= num; j++) {
    sample[j] = sample[j - 1] + sample[j - 2] + sample[j - 3];
  }
  console.log(sample[num]);
}
