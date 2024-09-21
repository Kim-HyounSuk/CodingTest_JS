function solution(targets) {
    let answer = 0;
    let prevEnd = -1;
    
    targets.sort((a, b) => a[1] - b[1]);
    
    targets.forEach((target) => {
        const [targetStart, targetEnd] = target;
        
        if(prevEnd <= targetStart) {
            answer++;
            prevEnd = targetEnd;
        }
    });
    
    return answer;
}