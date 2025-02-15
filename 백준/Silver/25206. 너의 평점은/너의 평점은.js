const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const solution = () => {
  const gradeList = {
    "A+": 4.5,
    A0: 4.0,
    "B+": 3.5,
    B0: 3.0,
    "C+": 2.5,
    C0: 2.0,
    "D+": 1.5,
    D0: 1.0,
    F: 0.0,
  };
  let totalCredit = 0;
  let totalScore = 0;

  for (let i = 0; i < 20; i++) {
    const [_, credit, grade] = input[i].split(" ");
    const score = gradeList[grade];

    if (grade === "P") continue;

    totalCredit += Number(credit);
    totalScore += score * Number(credit);
  }

  console.log(Math.round((totalScore / totalCredit) * 1e6) / 1e6);
};

solution();
