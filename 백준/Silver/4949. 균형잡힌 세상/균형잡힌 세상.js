const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().replace(/\r\n/g, '').split('.');

input.pop();
input.pop();

const group = {
  '(': ')',
  '[': ']',
};

const determination = (paragraph) => {
  const stack = [];

  for (const char of paragraph) {
    if (group[char]) {
      // 여는 괄호일 경우 스택에 추가
      stack.push(group[char]);
    } else if (char === ')' || char === ']') {
      // 닫는 괄호일 경우 스택에서 비교
      if (stack.pop() !== char) {
        return false;
      }
    }
  }

  // 스택이 비어있으면 모든 괄호가 짝을 이룸
  return stack.length === 0;
};

const solution = () => {
  const answer = [];

  input.forEach((paragraph) => {
    determination(paragraph) ? answer.push('yes') : answer.push('no');
  });

  console.log(answer.join('\n'));
};

solution();
