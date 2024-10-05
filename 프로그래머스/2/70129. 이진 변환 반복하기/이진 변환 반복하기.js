function solution(s) {
    let answer = [0, 0];
    let sLength = 0;
    const regex = /0/g;

    while(s.length > 1) {
        sLength = s.length;
        s = s.replace(regex, '');
        
        answer[0]++;
        answer[1] += (sLength - s.length);
        
        s = s.length.toString(2);
    }
    
    return answer;
}