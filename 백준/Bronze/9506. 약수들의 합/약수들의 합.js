const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);
input.pop();

const solution = () => {
  input.forEach((num) => {
    let sum = 1;
    let str = '1';

    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        sum += i;
        str = str + ` + ${i}`;
      }
    }

    if (sum === num) console.log(`${num} = ${str}`);
    else console.log(`${num} is NOT perfect.`);
  });
};

solution();
