const { setFips } = require('crypto');
const fs = require('fs');
const { getDefaultAutoSelectFamily, setDefaultAutoSelectFamily } = require('net');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

const solution = () => {
  const [A, B] = input.split(' ');

  const getGCD = (A, B) => {
    let gcd = 1;

    for (let i = 2; i <= Math.min(A, B); i++) {
      if (A % i === 0 && B % i === 0) gcd = i;
    }

    return gcd;
  };

  const lcm = (A * B) / getGCD(A, B);

  console.log(lcm);
};

solution();
