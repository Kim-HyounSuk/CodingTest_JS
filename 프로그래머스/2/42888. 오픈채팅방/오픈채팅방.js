function solution(record) {
    let answer = [];
    const nicknames = {};
    
    record.forEach((ele) => {
        const [command, id, nickname] = ele.split(' ');
        
        if(command !== 'Leave') nicknames[id] = nickname;
    });
    
    record.forEach((ele) => {
        const [command, id, nickname] = ele.split(' ');
        
        if(command === 'Enter') answer.push(`${nicknames[id]}님이 들어왔습니다.`);
        else if(command === 'Leave') answer.push(`${nicknames[id]}님이 나갔습니다.`);
    });
    
    return answer;
}