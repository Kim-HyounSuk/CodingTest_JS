function solution(n, wires) {
    const answer = [];
    
    // 그래프 생성
    const connectionMap = wires.reduce((map, connection) => {
        const [from, to] = connection;
        
        if(!map[from]) map[from] = [];
        if(!map[to]) map[to] = [];
        
        map[from].push(to);
        map[to].push(from);
        
        return map;
    }, {});
    
    // BFS 탐색 구현
    const BFS = (graph, except) => {
        let queue = [1];
        const visited = [];
        
        while(queue.length) {
            const curTower = queue.shift();
            
            if(!visited.includes(curTower) && curTower !== except) {
                visited.push(curTower);
                queue = [...queue, ...graph[curTower]];
            }
        }
        
        return visited.length;
    };
    
    // 각 송전탑을 돌며 개수 차이 확인
    for(let i = 1; i < n + 1; i++) {
        const differ = Math.abs(n - (2 * BFS(connectionMap, i)));
        
        answer.push(differ);
    }
    
    return Math.min(...answer);
}