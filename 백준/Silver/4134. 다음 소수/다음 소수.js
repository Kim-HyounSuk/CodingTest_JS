const { setFips } = require('crypto');
const fs = require('fs');
const { getDefaultAutoSelectFamily, setDefaultAutoSelectFamily } = require('net');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const isPrime = (number) => {
  if (number === 1) return false;

  if (number % 2 === 0) {
    if (number === 2) return true;
    else return false;
  }

  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0) return false;
  }

  return true;
};

const solution = () => {
  const N = input.shift();

  for (let i = 0; i < N; i++) {
    let number = input[i];

    while (true) {
      if (isPrime(number)) {
        console.log(number);
        break;
      }

      number++;
    }
  }
};

solution();
