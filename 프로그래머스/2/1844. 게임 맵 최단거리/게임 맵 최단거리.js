function solution(maps) {
    const [goalX, goalY] = [maps.length - 1, maps[0].length - 1];
    const [dirX, dirY] = [[0, 0, -1, 1], [-1, 1, 0, 0]];
    
    const BFS = (graph) => {
        const queue = [[0, 0, 0]];
        let move = 0;
        
        while(queue.length) {
            const [curX, curY, move] = queue.shift();
            
            // 현재 좌표가 도착점인지 확인
            if(curX === goalX && curY === goalY) {
                return move + 1;
            }
            
            // 다음 좌표 상하좌우 확인
            for(let i = 0; i < 4; i++) {
                const [nextX, nextY] = [curX + dirX[i], curY + dirY[i]];
                
                // Map을 벗어난 경우 Pass
                if(nextX < 0 || nextY < 0 || nextX > goalX || nextY > goalY) {
                    continue;
                }
                
                // 방문 했거나 갈 수 없는 길인 경우
                if(graph[nextX][nextY] === 0) {
                    continue;
                }
                
                // 진행 가능한 길일 경우
                queue.push([nextX, nextY, move + 1]);
                
                // 방문 기록
                graph[nextX][nextY] = 0;
            }
        }
        
        return -1;
    };
    
    return BFS(maps);
}