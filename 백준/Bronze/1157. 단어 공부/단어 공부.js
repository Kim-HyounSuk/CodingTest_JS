const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().toUpperCase();

const solution = () => {
  const freq = new Map();

  for (let char of input) {
    freq.set(char, (freq.get(char) || 0) + 1);
  }

  let maxFreq = 0;
  let maxChar = "?";
  for (let [char, count] of freq) {
    if (count > maxFreq) {
      maxFreq = count;
      maxChar = char;
    } else if (count === maxFreq) {
      maxChar = "?";
    }
  }

  console.log(maxChar);
};

solution();
