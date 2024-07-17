function solution(numbers, hand) {
    let answer = '';
    let curL = [3, 0], curR = [3, 2];
    
    const useLeft = {
        1: [0, 0],
        4: [1, 0],
        7: [2, 0],
    };  
    const useRight = {
        3: [0, 2],
        6: [1, 2],
        9: [2, 2],
    } 
    const useBoth = {
        2: [0, 1],
        5: [1, 1],
        8: [2, 1],
        0: [3, 1],
    }
    
    numbers.forEach((number) => {
        if(useLeft[number]) {
            answer += 'L';
            curL = useLeft[number];
        }
        
        if(useRight[number]) {
            answer += 'R';
            curR = useRight[number];
        }
        
        if(useBoth[number]) {
            const target = useBoth[number];
            const moveLeft = Math.abs(target[0] - curL[0]) + Math.abs(target[1] - curL[1]);
            const moveRight = Math.abs(target[0] - curR[0]) + Math.abs(target[1] - curR[1]);
            
            if(moveLeft < moveRight) {
                answer += 'L';
                curL = target;
            }
            
            if(moveLeft > moveRight) {
                answer += 'R';
                curR = target;
            }
            
            if(moveLeft === moveRight) {
                if(hand === 'left') {
                    answer += 'L';
                    curL = target;
                }
                
                if(hand === 'right') {
                    answer += 'R';
                    curR = target;
                }
            }
        }
    });
    
    return answer;
}