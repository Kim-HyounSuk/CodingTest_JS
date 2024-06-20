function solution(n) {
    var answer = '';
    const type = [4, 1, 2];
    
    while(n > 0) {
        answer = type[n%3] + answer;
        
        n = parseInt((n - 1) / 3);
    }
    
    return answer;
}