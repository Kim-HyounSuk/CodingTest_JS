const getPermutation = (arr, num) => {
    const result = [];
    
    if(num === 1) return arr.map((value) => [value]);
    
    arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
        const permutations = getPermutation(rest, num - 1);
        
        const attached = permutations.map((permutation => [fixed, ...permutation]));
        
        result.push(...attached);
    });
    
    return result;
}

function solution(k, dungeons) {
    let answer = -1;
    
    const permutation = getPermutation(dungeons, dungeons.length);
    
    permutation.forEach((arr) => {
        let stamina = k;
        let completed = 0;
        for(let i = 0; i < arr.length; i++) {
            const [minRequired, consumption] = arr[i];
            if(stamina >= minRequired) {
                completed += 1;
                stamina -= consumption;
            } else {
                break;
            }
        }
        
        answer = Math.max(answer, completed);
    });
    
    return answer;
}