function solution(numbers) {    
    let answer = numbers.sort((a, b) => {
        const stringA = String(a);
        const stringB = String(b);
        
        return (stringB + stringA) - (stringA + stringB);
    }).join('');
    
    return answer[0] === '0' ? '0' : answer;
}