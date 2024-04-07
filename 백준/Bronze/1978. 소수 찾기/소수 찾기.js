const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift();

const isPrime = (number) => {
  if (number <= 1) return false;
  if (number % 2 === 0) return number === 2 ? true : false;

  for (let i = 3; i <= parseInt(Math.sqrt(number)); i += 2) {
    if (number % i === 0) return false;
  }

  return true;
};

const solution = () => {
  const numbers = input[0].split(' ').map(Number);

  const answer = numbers.reduce((acc, number) => {
    if (isPrime(number)) {
      return acc + 1;
    }

    return acc;
  }, 0);

  console.log(answer);
};

solution();
