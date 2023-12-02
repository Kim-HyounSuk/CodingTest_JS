function solution(clothes) {
    let answer = 1;
    
    const clothesMap = clothes.reduce((map, arr) => {
        if(map.has(arr[1])) {
            map.set(arr[1], map.get(arr[1]) + 1);
        } else {
            map.set(arr[1], 1);
        }
        
        return map;
    }, new Map)
    
    clothesMap.forEach((value) => {
        answer *= value + 1
    })
    
    return answer - 1;
}