const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const solution = () => {
  let answer = input;
  const compareList = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

  compareList.forEach((compare) => (answer = answer.replaceAll(compare, "0")));

  console.log(answer.length);
};

solution();