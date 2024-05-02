const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((value) => value.replace(/\r/, ''));

const solution = () => {
  const N = Number(input.shift());
  const cards = input.shift().split(' ').map(Number);
  const M = Number(input.shift());
  const questions = input.shift().split(' ').map(Number);
  const deck = {};
  const answer = [];

  cards.forEach((card) => {
    if (!deck[card]) deck[card] = 1;
    else deck[card] += 1;
  });

  questions.forEach((question) => {
    if (!deck[question]) answer.push(0);
    else answer.push(deck[question]);
  });

  console.log(answer.join(' '));
};

solution();
