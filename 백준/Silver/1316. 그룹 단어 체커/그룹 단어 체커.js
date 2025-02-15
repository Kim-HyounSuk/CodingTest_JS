const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const solution = () => {
  const N = Number(input.shift());
  let answer = 0;

  outerLoop: for (let i = 0; i < N; i++) {
    const duplicationCheck = new Set();
    let prev = "";

    for (let str of input[i]) {
      if (!duplicationCheck.has(str)) {
        duplicationCheck.add(str);
        prev = str;
        continue;
      }

      if (prev !== str) continue outerLoop;
    }

    answer++;
  }

  console.log(answer);
};

solution();