function solution(weights) {
    var answer = 0;
    const ratios = [1, 2/3, 2/4, 3/4];
    const checked = {};
    
    weights.sort((a, b) => a - b).forEach((weight) => {
        ratios.forEach((ratio) => {
            const equal = weight * ratio;
            
            if(checked[equal]) {
                answer += checked[equal];
            }
        });
        
        if(checked[weight]) checked[weight] += 1;
        else checked[weight] = 1;
    });
    
    return answer;
}