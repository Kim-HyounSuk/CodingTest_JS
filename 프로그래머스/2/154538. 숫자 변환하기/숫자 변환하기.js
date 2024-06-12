class Node {
    constructor(item) {
        this.item = item;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    
    length() {
        return this.size;
    }
    
    push(value) {
        const node = new Node(value);
        
        if(!this.size) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        
        this.size += 1;
    }
    
    pop() {
        const node = this.head.item;
        
        if(!this.size) {
            return undefined;
        } else {
            if(this.size > 1) {
                this.head = this.head.next;
            } else {
                this.head = null;
                this.tail = null;
            }
            
            this.size -= 1;
        }
        
        return node;
    }
}

function solution(x, y, n) {
    let answer = -1;
    const queue = new Queue();
    
    queue.push([y, 0]);
    
    while(queue.length()) {
        const [value, step] = queue.pop();
        
        if(value <= x) {
            if(value === x) answer = step;
            break;
        }
        
        if(value - n >= x) queue.push([value - n, step + 1]);
        if(value % 2 === 0 && value / 2 >= x) queue.push([value / 2, step + 1]);
        if(value % 3 === 0 && value / 3 >= x) queue.push([value / 3, step + 1]);
    }
    
    return answer;
}