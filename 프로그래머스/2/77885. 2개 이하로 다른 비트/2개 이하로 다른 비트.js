function solution(numbers) {
    var answer = [];
    
    for(let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        
        if(number % 2 === 0) {
            answer.push(number + 1);
            continue;
        }
        
        const bit = '0' + number.toString(2);
        const idx = bit.lastIndexOf('0');
        
        const decimal = parseInt(`${bit.slice(0, idx)}10${bit.slice(idx + 2)}`, 2);
        
        answer.push(decimal);
    }
    
    return answer;
}