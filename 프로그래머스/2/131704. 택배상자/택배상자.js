class Node {
    constructor(item) {
        this.item = item;
        this.prev = null;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
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
        
        if(!this.size) return undefined;
        else {
            if(this.size === 1) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
            }
        }
        
        this.size -= 1;
        
        return node;
    }
    
    length() {
        return this.size;
    }
    
    output() {
        return this.head.item;
    }
}

class Stack {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    
    push(value) {
        const node = new Node(value);
        
        if(!this.size) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail = node;
        }
        
        this.size += 1;
    }
    
    pop() {
        const node = this.tail.item;
        
        if(!this.size) return undefined;
        else {
            if(this.size === 1) {
                this.head = null;
                this.tail = null;
            } else {
                this.tail = this.tail.prev;
            }
        }
        
        this.size -= 1;
        
        return node;
    }
    
    length() {
        return this.size;
    }
    
    output() {
        return this.tail.item;
    }
}

function solution(order) {
    var answer = 0;
    
    const mainBelt = new Queue();
    const subBelt = new Stack();
    let sequence = 1;
    
    for(let i = 1; i <= order.length; i++) {
        mainBelt.push(i);
    }
    
    while(mainBelt.length()) {
        subBelt.push(mainBelt.pop());
        
        while(subBelt.length()) {
            if(subBelt.output() === order[sequence - 1]) {
                subBelt.pop();
                sequence++;
            } else {
                break;
            }
        }
    }
    
    return sequence - 1;
}