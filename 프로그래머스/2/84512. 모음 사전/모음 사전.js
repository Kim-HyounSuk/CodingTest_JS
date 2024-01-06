function solution(word) {
    var answer = 0;
    const result = [];
    
    const dfs = (word, length) => {
        if(length > 5) return;
        if(word.length > 0) result.push(word);
        
        [..."AEIOU"].forEach((vowel) => {
            dfs(word + vowel, length + 1);
        });
    }
    
    dfs("", 0);
    answer = result.indexOf(word) + 1;
    
    return answer;
}