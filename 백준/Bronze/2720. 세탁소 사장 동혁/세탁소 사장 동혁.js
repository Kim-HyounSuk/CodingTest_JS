const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const solution = () => {
  const T = input.shift();
  const changes = [...input];
  const type = [25, 10, 5, 1];

  changes.forEach((change) => {
    const coins = [0, 0, 0, 0];

    for (let i = 0; i < type.length; i++) {
      if (change % type[i] === 0) {
        coins[i] = change / type[i];
        break;
      }

      if (change > type[i]) {
        coins[i] = Math.floor(change / type[i]);
        change = change % type[i];
      }
    }

    console.log(...coins);
  });
};

solution();