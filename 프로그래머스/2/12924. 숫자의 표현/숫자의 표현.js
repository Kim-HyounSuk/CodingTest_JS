// function solution(n) {
//     let answer = 0;
    
//     for(let i = 0; i < n; i++) {
//         let sum = 0;
//         for(let j = i + 1; j <= n; j++) {
//             sum += j
            
//             if(sum === n) answer += 1;
//             if(sum > n) break;
//         }
//     }
    
//     return answer;
// }

function solution(n) {
  let answer = 0;
  
  for(let i = 0; i <= n; i++) {
  	if(n%i === 0 && i%2 === 1) answer++;
  }
  
  return answer;
}

// "주어진 자연수를 연속된 자연수의 합으로 표현하는 방법의 수와
// 주어진 수의 홀수인 약수 갯수는 같다."