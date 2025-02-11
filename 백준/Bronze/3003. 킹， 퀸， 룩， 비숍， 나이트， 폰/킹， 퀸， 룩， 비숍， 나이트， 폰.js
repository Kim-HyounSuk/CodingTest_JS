const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().split(" ");

const solution = () => {
  const pieces = [1, 1, 2, 2, 2, 8];

  const answer = input.map((piece, idx) => pieces[idx] - piece);

  console.log(answer.join(" "));
};

solution();