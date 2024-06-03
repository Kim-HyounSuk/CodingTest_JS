function solution(dirs) {
    let answer = 0;
    let [x, y] = [0, 0];
    
    const dir = {
        L: [-1, 0],
        R: [1, 0],
        U: [0, 1],
        D: [0, -1]
    };
    
    const checked = [];
    
    for(let i = 0; i < dirs.length; i++) {
        const [dx, dy] = dir[dirs[i]];
        const [nx, ny] = [x + dx, y + dy];
        
        const fromTo = `${x},${y},${nx},${ny}`;
        const toFrom = `${nx},${ny},${x},${y}`;
        
        if(nx >= -5 && nx <= 5 && ny >= -5 && ny <= 5) {
            x = nx;
            y = ny;
        
            if(!checked.includes(fromTo) && !checked.includes(toFrom)) {
                checked.push(fromTo);
                checked.push(toFrom);
            
                answer++;
            }
        }
    }
    
    return answer;
}