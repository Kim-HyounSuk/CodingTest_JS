function solution(queue1, queue2) {
    var answer = 0;
    
    const totalLength = (queue1.length + queue2.length);
    const maxOperation = totalLength * 2;
    
    let q1Sum = queue1.reduce((acc, val) => acc + val);
    let q2Sum = queue2.reduce((acc, val) => acc + val);
    let q1Pointer = 0, q2Pointer = 0;
    
    if((q1Sum + q2Sum) % 2 !== 0) return -1
    
    while(q1Sum !== q2Sum) {
        if(q1Sum > q2Sum) {
            if(q1Pointer >= queue1.length) return -1;
            
            const element = queue1[q1Pointer++];
            q1Sum -= element;
            q2Sum += element;
            queue2.push(element);
        } else {
            if(q2Pointer >= queue2.length) return -1;
            
            const element = queue2[q2Pointer++];
            q1Sum += element;
            q2Sum -= element;
            queue1.push(element);
        }
        
        answer++;
        
        if(answer >= maxOperation) {
            return -1
        }
    }
    
    return answer;
}