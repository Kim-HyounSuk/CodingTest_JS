function solution(n, wires) {
    let answer = 9999;
    const graph = {};
    
    wires.map(wire => {
        const [start, end] = wire;
        if(!graph[start]) graph[start] = [];
        if(!graph[end]) graph[end] = [];
        
        graph[start].push(end);
        graph[end].push(start);
    });
    
    const dfs = (start, except) => {
        let count = 0;
        const schedule = [start];
        const visited = [start];
        
        while(schedule.length) {
            const node = schedule.pop();
            graph[node].forEach((element) => {
                if(element !== except && !visited.includes(element)) {
                    visited.push(element);
                    schedule.push(element);
                }
            });
            count++;
        }
        
        return count;
    }
    
    wires.forEach(element => {
        const [start, end] = element;
        answer = Math.min(answer, Math.abs(dfs(start, end) - dfs(end, start)));
    });
    
    return answer;
}