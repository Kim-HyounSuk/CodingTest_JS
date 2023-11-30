function solution(participant, completion) {
    var answer = '';
    
    // 완료자 이름을 key로 맵 객체 생성
    const completionMap = completion.reduce((map, name) => {
        if(map.has(name)) {
            map.set(name, map.get(name) + 1);
        } else {
            map.set(name, 1);
        }
        return map;
    }, new Map);
    
    participant.forEach((name) => {
        if(completionMap.has(name)) {
            if(completionMap.get(name) === 1) completionMap.delete(name);
            else completionMap.set(name, completionMap.get(name) - 1);
        } else {
            answer = name;
        }
    });
    
    return answer;
}