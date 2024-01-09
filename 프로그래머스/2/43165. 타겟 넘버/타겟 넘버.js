function solution(numbers, target) {
    var answer = 0;
    
    const recursiveFn = (idx, value) => {
        if(idx < numbers.length) {
            recursiveFn(idx + 1, value + numbers[idx]);
            recursiveFn(idx + 1, value - numbers[idx]);
        } else {
            if(value === target) answer++;
        }
    };
    
    recursiveFn(0, answer);
    
    return answer;
}