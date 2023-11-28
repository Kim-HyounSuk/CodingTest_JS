function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let bridgeWeight = 0;
    let bridge = [];
    
    // 최초 트럭
    answer++;
    bridgeWeight = truck_weights[0];
    bridge.push(truck_weights.shift());
    
    while(bridge.length > 0) {
        answer++;
        
        // 트럭 도착
        if(answer > bridge_length) {
            bridgeWeight -= bridge.shift();
        }
        
        // 다리 무게 초과시
        if(bridgeWeight + truck_weights[0] > weight) {
            bridge.push(0);
        } else {
            // 다음 트럭 출발
            if(truck_weights.length > 0) {
                const nextTruck = truck_weights.shift();
                bridge.push(nextTruck);
                bridgeWeight += nextTruck;

            }
        }
    }
    
    return answer;
}