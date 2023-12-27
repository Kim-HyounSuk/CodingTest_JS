class Heap {
    constructor() {
        this.heap = [];
    }
    
    size() {
        return this.heap.length;
    }
    
    swap(curIdx, nextIdx) {
        [this.heap[curIdx], this.heap[nextIdx]] = [this.heap[nextIdx], this.heap[curIdx]];
    }
    
    bubbleUp() {
        let curIdx = this.heap.length - 1;
        
        while(curIdx > 0) {
            const parIdx = Math.floor((curIdx - 1) / 2);
            
            if(this.heap[curIdx][1] > this.heap[parIdx][1]) break;
            
            this.swap(curIdx, parIdx);
            curIdx = parIdx;
        }
    }
    
    bubbleDown() {
        let curIdx = 0;
        
        while(true) {
            const leftIdx = (curIdx * 2) + 1;
            const rightIdx = (curIdx * 2) + 2;
            let minIdx = curIdx;
            
            if(leftIdx < this.heap.length && this.heap[minIdx][1] > this.heap[leftIdx][1]) minIdx = leftIdx;
            if(rightIdx < this.heap.length && this.heap[minIdx][1] > this.heap[rightIdx][1]) minIdx = rightIdx;
            if(minIdx === curIdx) break;
            
            this.swap(curIdx, minIdx);
            curIdx = minIdx;
        }
    }
    
    push(value) {
        this.heap.push(value);
        this.bubbleUp();
    }
    
    pop() {
        if(this.heap.length === 0) return null;
        if(this.heap.length === 1) return this.heap.pop();
        
        const rootNode = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        
        return rootNode;
    }
    
    pick() {
        return this.heap[0];
    }
}

function solution(jobs) {
    const minHeap = new Heap();
    jobs.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
    const totalJobs = jobs.length;
    let curTime = 0;
    let answer = 0;
    
    while (jobs.length > 0 || minHeap.size() > 0) {
        while (jobs.length && jobs[0][0] <= curTime) {
            minHeap.push(jobs.shift());
        }

        if (minHeap.size() > 0) {
            const [requestTime, requiredTime] = minHeap.pop();
            curTime += requiredTime;
            answer += curTime - requestTime;
        } else {
            curTime++;
        }
    }
    
    return Math.floor(answer / totalJobs);
}