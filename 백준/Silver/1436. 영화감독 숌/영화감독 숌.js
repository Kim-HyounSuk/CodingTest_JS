const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim();

const solution = () => {
  let N = Number(input);
  let doomsday = 665;

  while (N > 0) {
    doomsday++;
    const included = String(doomsday).includes('666');

    if (included) {
      N -= 1;
    }
  }

  console.log(doomsday);
};

solution();
