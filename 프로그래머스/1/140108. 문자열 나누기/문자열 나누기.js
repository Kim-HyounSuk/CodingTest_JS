function solution(s) {
    var answer = 0;
    const str = s.split('');
    let storage = [];
    let other = 0;
    
    str.forEach((ele) => {
        if(!storage.length) {
            storage.push(ele);
        } else if(storage[storage.length - 1] === ele) {
            storage.push(ele);
        } else {
            other++;
        }
        
        if(storage.length === other) {
            answer++;
            other = 0;
            storage = [];
        }
    });
    
    return storage.length ? answer + 1 : answer;
}