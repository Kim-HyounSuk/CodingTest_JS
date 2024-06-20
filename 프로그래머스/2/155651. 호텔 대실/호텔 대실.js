function solution(book_time) {
    let rooms = [];
    let max = 0;
    
    const arr = book_time.map((user) => {
        const [inHours, inMinutes] = user[0].split(':').map(Number);
        const [outHours, outMinutes] = user[1].split(':').map(Number);
        const [inTime, outTime] = [inHours * 60 + inMinutes, outHours * 60 + outMinutes + 10];
        
        return [inTime, outTime];
    });
    
    arr.sort((a, b) => {
        if(a[0] > b[0]) return 1;
        else if(a[0] < b[0]) return -1;
        else {
            return a[1] - b[1];
        }
    });
    
    console.log(arr);
    
    arr.forEach(([inTime, outTime]) => {
        rooms = rooms.filter((ele) => ele > inTime);
        
        rooms.push(outTime);
        
        max = Math.max(max, rooms.length);
    });
    
    return max;
}