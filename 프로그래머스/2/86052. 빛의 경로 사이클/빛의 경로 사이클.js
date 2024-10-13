function solution(grid) {
    let answer = [];

    // 상, 하, 좌, 우
    const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ];
    
    const [leftTurn, rightTurn] = [[2, 3, 1, 0], [3, 2, 0, 1]];

    const height = grid.length;
    const width = grid[0].length;

    const visited = Array.from({ length: height }, () =>
        Array.from({ length: width }, () => Array(4).fill(false))
    );
    
    for(let y = 0; y < height; y++) {
        for(let x = 0; x < width; x++) {
            for(let d = 0; d < 4; d++) {
                if(visited[y][x][d]) continue;
                
                let targetY = y;
                let targetX = x;
                let dir = d;
                let depth = 0;
                
                while(!visited[targetY][targetX][dir]) {
                    depth++;
                    visited[targetY][targetX][dir] = true;
                    
                    if(grid[targetY][targetX] === 'L') dir = leftTurn[dir];
                    else if(grid[targetY][targetX] === 'R') dir = rightTurn[dir];
                    
                    targetY = (targetY + directions[dir][0] + height) % height;
                    targetX = (targetX + directions[dir][1] + width) % width;
                }
                
                answer.push(depth);
            }
        }
    }

    // 오름차순 정렬 후 반환
    return answer.sort((a, b) => a - b);
}