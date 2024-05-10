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

  for (let i = 3; i <= parseInt(Math.sqrt(number)); i += 2) {
    if (number % i === 0) return false;
  }

  return true;
};

const solution = () => {
  const T = input.shift();
  const primeList = {};

  for (let i = 2; i <= 1000000; i++) {
    if (isPrime(i)) primeList[i] = true;
  }

  input.forEach((N) => {
    let count = 0;

    for (let i = 1; i <= N / 2; i++) {
      if (primeList[i] && primeList[N - i]) count++;
    }

    console.log(count);
  });
};

solution();
