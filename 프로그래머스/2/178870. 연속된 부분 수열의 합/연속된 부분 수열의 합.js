function solution(sequence, k) {
    let answer = [];
    let [left, right] = [0, 0];
    let sum = sequence[0];
    
    while(right < sequence.length) {
        if(sum < k) {
            right++;
            sum += sequence[right];
        } else if(sum > k) {
            sum -= sequence[left];
            left++;
        }
        
        if(sum === k) {
            answer.push([left, right]);
            right++;
            sum += sequence[right];
        }
    }
    
    answer.sort((a, b) =>  Math.abs(a[0] - a[1]) - Math.abs(b[0] - b[1]));
    
    return answer[0];
}