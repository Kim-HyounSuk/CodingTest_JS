const { setFips } = require('crypto');
const fs = require('fs');
const { getDefaultAutoSelectFamily, setDefaultAutoSelectFamily } = require('net');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((value) => value.split(' ').map(Number));

const solution = () => {
  const [[nA, dA], [nB, dB]] = input;
  const numerator = nA * dB + nB * dA;
  const denominator = dA * dB;

  const getGCD = (A, B) => {
    let gcd = 1;

    for (let i = 2; i <= Math.min(A, B); i++) {
      if (A % i === 0 && B % i === 0) gcd = i;
    }

    return gcd;
  };

  const gcd = getGCD(numerator, denominator);
  const answer = [numerator / gcd, denominator / gcd];
  console.log(answer.join(' '));
};

solution();
