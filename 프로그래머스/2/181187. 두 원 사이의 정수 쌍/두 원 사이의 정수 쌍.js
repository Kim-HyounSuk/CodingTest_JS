function solution(r1, r2) {
    var answer = 0;
    
    for(let x = 1; x <= r2; x++) {
        const maxY = Math.sqrt(r2**2 - x**2);
        let minY = Math.sqrt(r1**2 - x**2);
        
        if(isNaN(minY)) minY = 0;
        
        answer += (Math.floor(maxY) - Math.ceil(minY) + 1);
    }
    
    return answer * 4;
}