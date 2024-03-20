const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

let number = input[0];
let count = 0;

while (true) {
  if (number % 5 === 0) {
    answer = number / 5 + count;
    break;
  }

  if (number < 0) {
    answer = -1;
    break;
  }

  count++;
  number -= 3;
}

console.log(answer);