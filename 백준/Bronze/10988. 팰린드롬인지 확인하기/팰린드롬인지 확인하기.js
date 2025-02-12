const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const solution = () => {
  const str = input;
  const reversed = str.split("").reverse().join("");

  console.log(str === reversed ? 1 : 0);
};

solution();