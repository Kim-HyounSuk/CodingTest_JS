function solution(prices) {
    let answer = [];
    
    for(let i = 0; i < prices.length; i++) {
        let temp = 0;
        
        for(let j = i + 1; j < prices.length; j++) {
            temp++
            if(prices[i] > prices[j]) break;
        }
        
        answer.push(temp);
    }
    
    return answer;
}