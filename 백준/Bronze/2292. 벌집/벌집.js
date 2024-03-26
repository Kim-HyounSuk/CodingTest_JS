const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

// 6, 12, 18, 24, ... 6n개씩 늘어남.
// 점화식: f(n) = f(n-1) + 6n.

const num = input[0];
let move = 1;
let rooms = 1;

while (rooms < num) {
  rooms += move * 6;

  move++;
}

console.log(move);
