const { setFips } = require('crypto');
const fs = require('fs');
const { getDefaultAutoSelectFamily, setDefaultAutoSelectFamily } = require('net');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);
input.pop();

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
  input.forEach((number) => {
    let nPrime = 0;

    for (let i = number + 1; i <= number * 2; i++) {
      if (isPrime(i)) nPrime++;
    }

    console.log(nPrime);
  });
};

solution();
