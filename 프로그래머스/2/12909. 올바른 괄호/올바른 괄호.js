function solution(s){
    let answer = [];
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(') answer.push('(');
        
        if(answer.length > 0) {
            if(s[i] === ')') answer.pop();
        } else {
            if(s[i] === ')') return false;
        }
    }

    return answer.length > 0 ? false : true;
}