function solution(land) {
    var answer = 0;

    for(let y = 1; y < land.length; y++) {
        for(let x = 0; x < land[y].length; x++) {
            const copy = [...land[y - 1]];
            copy.splice(x, 1);
            land[y][x] += Math.max(...copy);
        }
    }
    
    answer = Math.max(...land[land.length - 1]);
    
    return answer;
}