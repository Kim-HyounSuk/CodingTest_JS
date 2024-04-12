const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const solution = () => {
  const N = input.shift();
  const members = input.map((member) => member.split(' ').map((value) => value.replace(/\r/, '')));

  members.sort((a, b) => {
    if (Number(a[0]) > Number(b[0])) return 1;
    else if (Number(a[0]) < Number(b[0])) return -1;
    else return 0;
  });

  members.forEach((member) => {
    const [age, name] = member;

    console.log(`${age} ${name}`);
  });
};

solution();
