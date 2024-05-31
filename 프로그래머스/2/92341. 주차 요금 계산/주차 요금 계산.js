function solution(fees, records) {
    const answer = [];
    
    const [baseTime, baseFee, unitTime, unitFee ] = fees.map(Number);
    const allTime = 1439;
    const map = new Map();
    
    records.forEach((record) => {
        const [time, carNumber, state] = record.split(' ');
        const minutes = time.split(':').reduce((acc, ele, idx) => {
            return idx === 0 ? Number(ele) * 60 : acc + Number(ele);
        }, 0);
        
        if(state === 'IN') {
            if(!map.get(carNumber)) {
                // 첫 기록인 경우 사용시간 최대치로 기록
                map.set(carNumber, allTime - minutes);
            } else {
                // 사용시간이 존재하는 경우 기존 시간을 더한 후 사용시간 최대치로 기록
                map.set(carNumber, map.get(carNumber) + allTime - minutes);
            }
        } else if(state === 'OUT') {
            map.set(carNumber, minutes - (allTime - map.get(carNumber)) );
        }
    });
    
    for(const [carNumber, time] of map) {
        if(time > baseTime) {
            const fee = baseFee + (Math.ceil((time - baseTime) / unitTime) * unitFee);
            
            answer.push([carNumber, fee]);
        } else {
            answer.push([carNumber, baseFee]);
        }
    }
    
    // 오름차순 정렬
    answer.sort((a, b) => a[0] - b[0]);
    
    return answer.map(ele => ele[1]);
}