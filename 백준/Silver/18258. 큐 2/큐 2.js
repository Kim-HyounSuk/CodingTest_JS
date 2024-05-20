const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

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

  getSize() {
    return this.size;
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
      return -1;
    }
  }

  empty() {
    return this.size ? 0 : 1;
  }

  front() {
    return this.head ? this.head.item : -1;
  }

  back() {
    return this.tail ? this.tail.item : -1;
  }
}

const solution = () => {
  const N = Number(input.shift());
  const arr = input.map((ele) => ele.replace(/\r/g, '').split(' '));
  const queue = new Queue();
  let answer = '';

  for (let i = 0; i < N; i++) {
    const [command, value] = arr[i];

    switch (command) {
      case 'push':
        queue.push(value);
        break;
      case 'pop':
        answer += queue.pop() + '\n';
        break;
      case 'size':
        answer += queue.getSize() + '\n';
        break;
      case 'empty':
        answer += queue.empty() + '\n';
        break;
      case 'front':
        answer += queue.front() + '\n';
        break;
      case 'back':
        answer += queue.back() + '\n';
        break;
      default:
        break;
    }
  }

  console.log(answer);
};

solution();
