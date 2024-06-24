function solution(keymap, targets) {
    var answer = [];
    const map = {};
    
    keymap.forEach((ele) => {
        const keypad = ele.split('');
        
        keypad.forEach((key, idx) => {
            if(!map[key]) map[key] = idx + 1;
            else map[key] = Math.min(map[key], idx + 1);
        });
    });
    
    targets.forEach((ele) => {
        const str = ele.split('');
        let count = 0;
        
        for(let i = 0; i < str.length; i++) {
            if(!map[str[i]]) {
                count = -1;
                break;
            } else {
                count += map[str[i]];
            }
        }
        
        answer.push(count);
    });
    
    return answer;
}