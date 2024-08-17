function solution(park, routes) {
    const direction = {
        'E': [0, 1],
        'W': [0, -1],
        'N': [-1, 0],
        'S': [1, 0]
    };
    let curCrood = [];
    
    outerloop:
    for(let y = 0; y < park.length; y++) {
        for(let x = 0; x < park.length; x++) {
            if(park[y][x] === 'S') {
                curCrood = [y, x];
                break outerloop;
            }
        }
    }
    
    routes.forEach((route) => {
        const [dir, move] = route.split(' ');
        const [dy, dx] = direction[dir];
        const [curY, curX] = curCrood;
        let [ny, nx] = [curY, curX];
        
        for(let i = Number(move); i > 0; i--) {
            [ny, nx] = [ny + dy, nx + dx];
            if(ny >= park.length || ny < 0 || nx >= park[0].length || nx < 0 || park[ny][nx] === 'X') {
                [ny, nx] = [curY, curX];
                break;
            }
        }
        
        curCrood = [ny, nx];
    });
    
    return curCrood;
}