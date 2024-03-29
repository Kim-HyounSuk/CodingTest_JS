const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const solution = () => {
  let target = input[0];
  let group = 0;

  while (target > 0) {
    group++;
    target -= group;
  }

  if (group % 2 === 0) console.log(`${group + target}/${1 + -target}`);
  else console.log(`${1 + -target}/${group + target}`);
};

solution();