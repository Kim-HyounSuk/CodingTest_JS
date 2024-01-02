const isPrime = (number) => {
    // 음수와 1은 소수 X
    if(number <= 1) return false;
    
    // 2 인경우 true, 제외한 짝수인 경우 false
    if(number % 2 === 0) {
        return number === 2 ? true : false;
    }
    
    // 홀수 판별
    for(let i = 3; i <= parseInt(Math.sqrt(number)); i += 2) {
        if(number % i === 0) {
            return false;
        }
    }
    
    return true;
};

// 순열
const getPermutations = (arr, num) => {
    const result = [];
    
    if(num === 1) return arr.map(value => [value]);
    
    arr.forEach((fixed, index, origin) => {
        // 기준값을 제외한 나머지 배열.
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
        
        // 나머지 배열을 기준으로 재귀를 통해 순열을 구함.
        const permutations = getPermutations(rest, num - 1);
        
        // 기준값과 구해진 나머지 순열을 붙인다.
        const attached = permutations.map(value => [fixed, ...value]);
        
        // attached 값을 반환될 결과 값에 포함.
        result.push(...attached);
    });
    
    return result;
}

function solution(numbers) {
    let answer = new Set();
    const arr = numbers.split('');
    let permutation = [];
    
    
    for(let i = 1; i < numbers.length + 1; i++) {
        permutation = [...permutation, ...getPermutations(arr, i)];   
    }
    
    permutation.forEach((value) => {
        const combination = Number(value.reduce((acc, cur) => acc + cur));
        if(isPrime(combination)) answer.add(combination);
    });
    
    return answer.size;
}