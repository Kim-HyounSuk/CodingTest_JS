function solution(number, k) {
    const stack = [];
    
    for(let i = 0; i < number.length; i++) {
        const cur = number[i];
        
        while(k > 0 && stack[stack.length - 1] < cur) {
            stack.pop();
            k--;
        }
        
        stack.push(cur);
    }
    
    stack.splice(stack.length - k, k);
    
    return stack.join('');
}