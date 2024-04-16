const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  const N = Number(input.shift());
  const deck = input.shift().split(' ').map(Number);
  const M = Number(input.shift());
  const compare = input.shift().split(' ').map(Number);

  const checked = {};
  const answer = [];

  deck.forEach((card) => (checked[card] = true));

  compare.forEach((card) => {
    if (!checked[card]) answer.push(0);
    else answer.push(1);
  });

  console.log(answer.join(' '));
};

solution();
