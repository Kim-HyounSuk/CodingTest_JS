function solution(arr) {
    let answer = [0, 0];
    
    const compression = (startY, startX, length) => {
        const start = arr[startY][startX];
        let same = true;
        
        outerLoop:
        for(let y = startY; y < startY + length; y++) {
            for(let x = startX; x < startX + length; x++) {
                if(start !== arr[y][x]) {
                    same = false;
                    break outerLoop;
                }
            }
        }
        
        if(!same) {
            const half = Math.floor(length / 2);
            
            compression(startY, startX + half, half);   // 1사분면
            compression(startY, startX, half);  // 2사분면
            compression(startY + half, startX, half);   // 3사분면
            compression(startY + half, startX + half, half);    // 4사분면
        } else {
            if(arr[startY][startX] === 1) answer[1] += 1;
            else answer[0] += 1;
        }
    };
    
    compression(0, 0, arr.length);
    
    return answer;
}