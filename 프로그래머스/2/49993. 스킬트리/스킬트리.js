function solution(skill, skill_trees) {
    let answer = 0;
    
    outerloop:
    for(let i = 0; i < skill_trees.length; i++) {
        const queue = skill.split('');
        const tree = skill_trees[i].split('');
        
        while(queue.length && tree.length) {
            const target = queue[0];
            const comparison = tree[0];
            
            if(target === comparison) {
                queue.shift();
                tree.shift();
            } else {
                if(queue.includes(comparison)) continue outerloop;
                else tree.shift();
            }
        }
        
        answer += 1;
    }
    
    return answer;
}