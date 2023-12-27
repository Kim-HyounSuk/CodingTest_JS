function solution(operations) {
    let answer = [];
    
    operations.forEach((operation) => {
        if(operation.startsWith('I')) {
            answer.push(Number(operation.split(' ')[1]));
        } else if(operation.startsWith('D -')) {
            answer.sort((a, b) => b - a);
            answer.pop();
        } else {
            answer.sort((a, b) => b - a);
            answer.shift();
        }
    });
    
    answer.sort((a, b) => b - a);
    
    return answer.length ? [answer[0], answer[answer.length - 1]] : [0, 0];
}