const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString();

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

  push(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.head.next = this.tail;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.size += 1;
  }

  pop() {
    if (this.size > 2) {
      const item = this.head.item;
      const newHead = this.head.next;
      this.head = newHead;
      this.size -= 1;

      return item;
    } else if (this.size === 2) {
      const item = this.head.item;
      const newHead = this.head.next;
      this.head = newHead;
      this.tail = newHead;
      this.size -= 1;

      return item;
    } else if (this.size === 1) {
      const item = this.head.item;
      this.head = null;
      this.tail = null;
      this.size -= 1;

      return item;
    } else {
      return undefined;
    }
  }

  length() {
    return this.size;
  }

  front() {
    return this.head ? this.head.item : undefined;
  }
}

const solution = () => {
  const N = Number(input);
  const queue = new Queue();

  for (let i = 0; i < N; i++) {
    queue.push(i + 1);
  }

  while (queue.length() !== 1) {
    queue.pop();
    queue.push(queue.pop());
  }

  console.log(queue.front());
};

solution();