function solution(n) {
    const answer = Array.from({length: n}, () => []);
    const dir = [[1, 0], [0, 1], [-1, -1]];
    
    let dirIdx = 0;
    let item = 1;
    let x = 0, y = -1;
    
    for(let i = n; i > 0; i -= 1) {
        const [dy, dx] = dir[dirIdx];
        
        for(let j = 0; j < i; j++) {
            [y, x] = [y + dy, x + dx];
            answer[y][x] = item++;
        }
        
        dirIdx = (dirIdx + 1) % 3;
    }
    
    return answer.flat();
}