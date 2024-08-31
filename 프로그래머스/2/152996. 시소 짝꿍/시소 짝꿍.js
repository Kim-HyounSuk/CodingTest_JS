function solution(weights) {
    let answer = 0;
    const countMap = {};

    weights.sort((a, b) => a - b);
    // weights 배열을 순회하며 가능한 짝을 찾는다
    for (let weight of weights) {
        // 각각의 비율을 고려
        answer += (countMap[weight] || 0);           // 1:1 짝 찾기
        answer += (countMap[weight * 2 / 3] || 0);   // 2:3 짝 찾기
        answer += (countMap[weight * 3 / 4] || 0);   // 3:4 짝 찾기
        answer += (countMap[weight * 2 / 4] || 0);   // 2:4 짝 찾기
        
        // 현재 weight 값을 카운트 맵에 추가
        countMap[weight] = (countMap[weight] || 0) + 1;
    }
    
    return answer;
}