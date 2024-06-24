function solution(X, Y) {
    let answer = [];
    const map = new Map();
    
    const min = X.length <= Y.length ? X : Y;
    const max = X.length > Y.length ? X : Y;
    
    min.split('').forEach(ele => {
        if(!map.has(ele)) map.set(ele, 1);
        else map.set(ele, map.get(ele) + 1);
    });
    
    for(let i = 0; i < max.length; i++) {
        if(map.has(max[i])) {
            answer.push(Number(max[i]));
            
            if(map.get(max[i]) === 1) map.delete(max[i]);
            else map.set(max[i], map.get(max[i]) - 1);
        }
    }
    
    answer.sort((a, b) => b - a);
    
    if(!answer.length) answer = [-1];
    if(answer[0] === 0) answer = [0];
    
    return answer.join('');
}