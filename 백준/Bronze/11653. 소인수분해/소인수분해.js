const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

const primeFactorization = (number) => {
  while (number % 2 === 0) {
    console.log(2);
    number = number / 2;
  }

  for (let i = 3; i <= parseInt(Math.sqrt(number)); i += 2) {
    while (number % i === 0) {
      console.log(i);
      number = number / i;
    }
  }

  if (number > 2) console.log(number);
};

const solution = () => {
  const N = Number(input);

  primeFactorization(N);
};

solution();
