function solution(priorities, location) {
    let answer = 0;
    let arr = priorities.map((priority, idx) => {
        return {
            'priority': priority,
            'sequence': idx
        }
    });
    
    while(true) {
        const current = arr.shift();
        if(arr.some((item) => item.priority > current.priority)) {
            arr.push(current);
        } else {
            answer++;
            if(current.sequence === location) return answer;
        }
    }
    
    return answer;
}