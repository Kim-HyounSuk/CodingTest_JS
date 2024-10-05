function solution(n) {
    let answer = 0;
    
    for(let i = 0; i < n; i++) {
        let sum = 0;
        for(let j = i + 1; j <= n; j++) {
            sum += j
            
            if(sum === n) answer++;
            if(sum > n) break;
        }
    }
    
    return answer;
}