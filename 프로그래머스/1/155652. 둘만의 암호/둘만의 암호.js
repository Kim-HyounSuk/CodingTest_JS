function solution(s, skip, index) {
    let answer = '';
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
    skip = new Set(skip);
    s = s.split('');
    alphabet = alphabet.split('').filter((char) => !skip.has(char));
    
    s.forEach((char) => {
        const curIdx = alphabet.indexOf(char);
        const newIdx = (curIdx + index) % alphabet.length;
        
        answer += alphabet[newIdx];
    });
    
    return answer;
}