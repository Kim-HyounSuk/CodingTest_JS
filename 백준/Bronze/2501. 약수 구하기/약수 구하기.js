const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const solution = () => {
  let a = Number(input[0]); // 첫 번째 숫자
  let b = Number(input[1]); // 두 번째 숫자
  let aArr = []; // 약수 배열
  let index = 1;

  while (index <= a) {
    // index가 a가 될 때까지 반복
    if (a % index === 0) aArr.push(index); // aArr에 약수 추가
    index++;
  }
  if (aArr.length < b) {
    // 약수의 개수가 b보다 적을 때
    console.log(0);
  } else {
    console.log(aArr[b - 1]);
  }
};

solution();