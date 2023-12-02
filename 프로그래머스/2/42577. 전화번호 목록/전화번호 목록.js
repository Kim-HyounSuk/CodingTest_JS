function solution(phone_book) {
    var answer = true;
    phone_book.sort();
    
    for(let i = 0; i < phone_book.length - 1; i++) {
        const isPrefix = phone_book[i + 1].startsWith(phone_book[i]);
        if(isPrefix) {
            answer = !isPrefix;
            break;
        }
    }
    
    return answer;
}