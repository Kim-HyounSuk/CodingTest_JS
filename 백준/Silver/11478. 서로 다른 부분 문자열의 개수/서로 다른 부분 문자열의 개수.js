const { setFips } = require('crypto');
const fs = require('fs');
const { getDefaultAutoSelectFamily, setDefaultAutoSelectFamily } = require('net');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

const solution = () => {
  const subsets = [];

  for (let i = 0; i < input.length; i++) {
    let str = '';
    for (let j = i; j < input.length; j++) {
      str += input[j];
      subsets.push(str);
    }
  }

  console.log(new Set(subsets).size);
};

solution();
