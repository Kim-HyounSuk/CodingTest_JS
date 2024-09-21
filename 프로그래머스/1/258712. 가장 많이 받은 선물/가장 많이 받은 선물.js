function solution(friends, gifts) {
    let answer = 0;
    
    // 인덱스 번호 맵
    const idxMap = {};
    
    // 주고 받은 선물 기록
    const giftConnection = {};
    
    // 선물 지수
    const giftIdx = {};
    
    // 선물 받을 갯수
    const giftMap = {};
    
    friends.forEach((friend, idx) => {
        idxMap[friend] = idx;
        giftConnection[friend] = Array(friends.length).fill(0);
        giftIdx[friend] = 0;
        giftMap[friend] = 0;
    });
    
    gifts.forEach((gift) => {
        const [A, B] = gift.split(' ');
        
        giftConnection[A][idxMap[B]] += 1;
        giftIdx[A] += 1;
        giftIdx[B] -= 1;
    });
    
    for(const A in giftConnection) {
        giftConnection[A].forEach((givenAmount, idx) => {
            const B = friends[idx];
            const receivedAmount = giftConnection[B][idxMap[A]];
            
            // A가 B에게 준 선물량이 더 큰 경우
            if(givenAmount > receivedAmount) {
                giftMap[A] += 1;
            }
            
            // A와 B의 선물량이 같은 경우
            if(givenAmount === receivedAmount) {
                // A의 선물 지수가 B보다 큰 경우
                if(giftIdx[A] > giftIdx[B]) giftMap[A] += 1;
            }
        });
    }
    
    for(const friend in giftMap) {
        answer = Math.max(answer, giftMap[friend]);
    }
    
    return answer;
}