function solution(n, computers) {
    let answer = 0;
    const visited = new Array(n).fill(false);
    
    const dfs = (idx) => {
        const stack =[idx];
        while(stack.length) {
            const node = stack.pop();
            if(!visited[node]) {
                visited[node] = true;
                computers[node].forEach((connect, i) => {
                    if(i !== node && connect) stack.push(i);
                });
            }
        }
    };
    
    computers.forEach((computer, idx) => {
        if(!visited[idx]) {
            dfs(idx);
            answer++;
        }
    });
    
    return answer;
}