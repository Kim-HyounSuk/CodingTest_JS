function solution(storey) {
    let answer = 0;
    
    while(storey > 0) {
        let cur = storey % 10;
        storey = Math.floor(storey / 10);
        
        if(cur < 5) {
            answer += cur;
        } else if(cur > 5) {
            answer += (10 - cur);
            storey++;
        } else {
            answer += 5;
            if((storey%10) >= 5) {
                storey++;
            }
        }
    }
    
    return answer;
}