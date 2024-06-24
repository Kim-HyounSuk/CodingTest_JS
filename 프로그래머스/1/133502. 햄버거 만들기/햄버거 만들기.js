function solution(ingredient) {
    var answer = 0;
    
    const stack = [];
    const buger = '1231';
    
    ingredient.forEach(ele => {
        stack.push(ele);
        
        if(stack.length >= 4) {
            const recent = stack.slice(-4).join('');
            
            if(recent === buger) {
                stack.splice(-4);
                answer++;
            }
        }
    });
    
    return answer;
}