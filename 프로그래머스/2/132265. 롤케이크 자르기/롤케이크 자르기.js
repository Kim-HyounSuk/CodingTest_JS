function solution(topping) {
    const type = new Map();
    const brother = new Set();
    let answer = 0;
    
    // 토핑의 현황을 type객체에 저장.
    topping.forEach(ele => {
        type.get(ele) ? type.set(ele, type.get(ele) + 1) : type.set(ele, 1);
    });
    
    // 동생이 가져간 종류와 토핑 현황을 비교
    topping.forEach(ele => {
        brother.add(ele);
        
        if(type.get(ele)) type.set(ele, type.get(ele) - 1);
        if(type.get(ele) === 0) type.delete(ele);
        if(brother.size === type.size) answer++;
    });
    
    return answer;
}