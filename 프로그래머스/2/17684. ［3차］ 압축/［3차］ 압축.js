function solution(msg) {
    var answer = [];
    const dictionary = [0];
    let dicIdx = 26;
    let memory = '';
    
    for(let i = 0; i < 26; i++) {
        dictionary.push(String.fromCharCode(65 + i));
    }
    
    for(let i = 0; i < msg.length; i++) {
        memory += msg[i];
        
        if(!dictionary.includes(memory)) {
            answer.push(dictionary.indexOf(memory.slice(0, -1)));
            dictionary.push(memory);
            memory = msg[i];
        }
    }
    
    if(memory) answer.push(dictionary.indexOf(memory));
    
    return answer;
}