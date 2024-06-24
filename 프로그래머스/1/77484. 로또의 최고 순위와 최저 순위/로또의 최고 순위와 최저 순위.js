function solution(lottos, win_nums) {
    let answer = [];
    let same = 0;
    let unkwon = 0;
    
    const winning = {
        6: 1,
        5: 2,
        4: 3,
        3: 4,
        2: 5,
        1: 6,
        0: 6,
    }
    
    lottos.forEach(num => {
        if(num === 0) unkwon++;
        
        if(win_nums.includes(num)) {
            same++;
        }
    });
    
    answer = [winning[same + unkwon], winning[same]];
    
    return answer;
}