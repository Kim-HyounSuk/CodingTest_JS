function solution(nums) {
    // Set 객체로 중복제거
    let answer = new Set(nums);
    
    // 뽑을 수 있는 포켓몬 수
    let max = nums.length / 2;
    
    return answer.size > max ? max : answer.size;
}