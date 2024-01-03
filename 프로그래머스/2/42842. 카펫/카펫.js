function solution(brown, yellow) {
    let answer = [];
    let squareSize = brown + yellow;
    
    // height는 width 보다 짧거나 같아야 한다 (height의 최소값는 3 부터 시작)
    // (x - 2) * (y - 2) = yellow
    for(let height = 3; height <= (squareSize) / height; height++) {
        let width = Math.floor((squareSize) / height);
        if((width - 2) * (height - 2) === yellow) {
            answer = [width, height];
            break;
        }
    }
    
    return answer;
}