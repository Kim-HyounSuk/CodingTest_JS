function solution(n) {
    const getCases = (n) => {
        const dp = [1, 2];
        
        for(let i = 2; i < n; i++) {
            dp[i] = (dp[i - 2] + dp[i - 1]) % 1000000007;
        }
        
        return dp[n - 1];
    }
    
    const answer = getCases(n);
    
    return answer;
}