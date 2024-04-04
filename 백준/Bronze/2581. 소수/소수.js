const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const isPrime = (number) => {
  if (number <= 1) return false;
  if (number % 2 === 0) return number === 2 ? true : false;

  for (let i = 3; i <= parseInt(Math.sqrt(number)); i += 2) {
    if (number % i === 0) return false;
  }

  return true;
};

const solution = () => {
  const [from, to] = input;
  let [sum, min] = [0, -1];
  for (let i = from; i <= to; i++) {
    if (isPrime(i)) {
      sum += i;
      if (min === -1) min = i;
      else min = Math.min(min, i);
    }
  }

  if (min === -1) {
    return console.log(-1);
  }

  console.log(sum);
  console.log(min);
};

solution();
