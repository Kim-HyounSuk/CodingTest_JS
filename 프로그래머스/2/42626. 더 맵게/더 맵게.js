class Heap {
    constructor() {
        this.heap = [];
    }
    
    size() {
        return this.heap.length;
    }
    
    push(value) {
        this.heap.push(value);
        let curIdx = this.heap.length - 1;
        
        while(curIdx > 0) {
            const parIdx = Math.floor((curIdx - 1) / 2);
            
            if(this.heap[parIdx] <= this.heap[curIdx]) break;
            
            const copy = this.heap[curIdx];
            this.heap[curIdx] = this.heap[parIdx];
            this.heap[parIdx] = copy;
            
            curIdx = parIdx;
        }
    }
    
    pop() {
        if(this.heap.length === 0) return null;
        if(this.heap.length === 1) return this.heap.pop();
        
        const rootNode = this.heap[0];
        const lastNode = this.heap.pop();
        
        this.heap[0] = lastNode;
        let curIdx = 0;
        
        while(true) {
            const leftIdx = (2 * curIdx) + 1;
            const rightIdx = (2 * curIdx) + 2;
            let minIdx = curIdx;
            
            if(leftIdx < this.heap.length && this.heap[leftIdx] < this.heap[minIdx]) minIdx = leftIdx;
            if(rightIdx < this.heap.length && this.heap[rightIdx] < this.heap[minIdx]) minIdx = rightIdx;
            if(minIdx === curIdx) break;
            
            const copy = this.heap[curIdx];
            this.heap[curIdx] = this.heap[minIdx];
            this.heap[minIdx] = copy;
            
            curIdx = minIdx;
        }
        
        return rootNode;
    }
    
    peek() {
        return this.heap[0];
    }
}

function solution(scoville, K) {
    let answer = 0;
    
    const minHeap = scoville.reduce((heap, food) => {
        heap.push(food);
        
        return heap;
    }, new Heap());
    
    while(minHeap.size() >= 2 && minHeap.peek() < K) {
        const [first, second] = [minHeap.pop(), minHeap.pop()];
        const mixed = first + (2 * second);
        minHeap.push(mixed);
        answer++;
    }
    
    return minHeap.peek() >= K ? answer : -1;
}