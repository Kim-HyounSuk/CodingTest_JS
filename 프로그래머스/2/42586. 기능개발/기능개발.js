function solution(progresses, speeds) {
    let answer = [];
    
    while(progresses[0]) {
        let deploy = 0;
        
        progresses.forEach((progress, idx) => {
            progresses[idx] = progress + speeds[idx];
        });
        
        while(progresses[0] >= 100) {
            deploy++;
            progresses.shift();
            speeds.shift();
        }
        
        if(deploy) answer.push(deploy);
    }
    
    return answer;
}