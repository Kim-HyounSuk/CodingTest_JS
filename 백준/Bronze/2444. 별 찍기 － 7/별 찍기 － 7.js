const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString();

const solution = () => {
  const N = Number(input);
  const arr = [];

  for (let i = 0; i < N; i++) {
    let str = "";

    for (let j = N - i - 1; j > 0; j--) {
      str += " ";
    }

    str += "*";

    for (let j = 0; j < i; j++) {
      str += "**";
    }

    arr.push(str);
  }

  let answer = [...arr];
  arr.pop();
  arr.reverse();

  answer = [...answer, ...arr];
  console.log(answer.join("\n"));
};

solution();