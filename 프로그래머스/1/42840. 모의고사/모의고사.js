function solution(answers) {
    var answer = [];
    
    let answer1 = [1, 2, 3, 4, 5];
    let answer2 = [2, 1, 2, 3, 2, 4, 2, 5];
    let answer3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let one = 0, two = 0, three = 0;
    
    for(let i = 0; i < answers.length; i++) {
        if(answers[i] == answer1[i%answer1.length]) {
            one += 1;
        }
        if(answers[i] == answer2[i%answer2.length]) {
            two += 1;
        }
        if(answers[i] == answer3[i%answer3.length]) {
            three += 1;
        }
    }
    
    const max = Math.max(one, two, three);
    
    if(one === max) answer.push(1);
    if(two === max) answer.push(2);
    if(three === max) answer.push(3);
    
    return answer;
}