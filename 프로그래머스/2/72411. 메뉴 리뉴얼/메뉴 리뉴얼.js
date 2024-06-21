function solution(orders, course) {
    var answer = [];
    
    for(let i = 0; i < course.length; i++) {
        const map = {};
        let max = 0;
        
        orders.forEach((ele) => {
            const order = ele.split('');
            const combination = combinations(order, course[i]);
            
            combination.forEach(combi => {
                map[combi] ? map[combi]++ : map[combi] = 1;
            });
            
            for(const key in map) {
                max = Math.max(max, map[key]);
            }
        });
        
        if(max > 1) {
            for(const key in map) {
                if(max === map[key]) answer.push(key);
            }
        }
    }
    
    return answer.sort();
}

const combinations = (arr, depth) => {
    const result = [];
    
    if(depth === 1) return arr.map(ele => [ele]);
    
    arr.forEach((cur, idx, origin) => {
        const remain = origin.slice(idx + 1);
        const combination = combinations(remain, depth - 1);
        const combine = combination.map(ele => [cur, ...ele].sort().join(''));
        
        result.push(...combine);
    });
    
    return result;
}