function solution(k, tangerine) {
    let answer = 0;
    const map = {};
    
    tangerine.forEach(ele => map[ele] = (map[ele] || 0) + 1);
    
    const arr = Object.values(map).sort((a, b) => b - a);
    
    while(k > 0) {
        answer++;
        k -= arr.shift();
    }
    
    return answer;
}