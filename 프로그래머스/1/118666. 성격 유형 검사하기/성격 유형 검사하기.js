function solution(survey, choices) {
    let answer = '';
    const indicators = [['R', 'T'], ['C','F'], ['J', 'M'], ['A', 'N']];
    const map = {};
    
    survey.forEach((ele, idx) => {
        const [personality, opposition] = ele.split('');
        
        if(map[personality] === undefined) {
            map[personality] = 0;
            map[opposition] = 0;
        }
        
        if(choices[idx] < 4) {
            map[personality] += 4 - choices[idx];
        }
        
        if(choices[idx] > 4) {
            map[opposition] += choices[idx] - 4;
        }
    });
    
    indicators.forEach((ele) => {
        const [personality, opposition] = ele;
        
        if(map[personality] > map[opposition]) {
            answer += personality;
        }
        
        if(map[personality] < map[opposition]) {
            answer += opposition;
        }
        
        if(map[personality] === map[opposition || map[personality] === undefined]) {
            ele.sort();
            answer += ele[0];
        }
    });
    
    return answer;
}