function solution(m, n, board) {
    let answer = 0;
    
    const arr = board.map(ele => ele.split(''));
    
    while(true) {
        const pang = [];
        
        for(let y = 0; y < m - 1; y++) {
            for(let x = 0; x < n - 1; x++) {
                if(arr[y][x] && arr[y][x] === arr[y + 1][x] && arr[y][x] === arr[y][x + 1] && arr[y][x] === arr[y + 1][x + 1]) {
                    pang.push([y, x]);
                }
            }
        }
        
        if(!pang.length) return [...arr].flat().filter(ele => !ele).length
        
        pang.forEach((crood) => {
            const [y, x] = crood;
            
            arr[y][x] = 0;
            arr[y + 1][x] = 0;
            arr[y][x + 1] = 0;
            arr[y + 1][x + 1] = 0;
        });
        
        for(let y = m - 1; y > 0; y--) {
            for(let x = 0; x < n; x++) {
                if(arr[y][x] === 0) {
                    for(let ny = y - 1; ny >= 0; ny--) {
                        if(arr[ny][x] !== 0) {
                            arr[y][x] = arr[ny][x];
                            arr[ny][x] = 0;
                            break;
                        }
                    }
                }
            }
        }
    }
    
    return answer;
}