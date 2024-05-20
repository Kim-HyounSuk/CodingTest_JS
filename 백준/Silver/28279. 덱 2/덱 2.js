const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
    this.prev = null;
  }
}

class Dequeue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  getSize() {
    return this.size;
  }

  unshift(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      const cacheNode = this.head;
      cacheNode.prev = node;

      this.head = node;
      this.head.next = cacheNode;
    }

    this.size += 1;
  }

  push(value) {
    const node = new Node(value);

    if (!this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      const cacheNode = this.tail;
      cacheNode.next = node;

      this.tail = node;
      this.tail.prev = cacheNode;
    }

    this.size += 1;
  }

  shift() {
    if (this.size > 0) {
      const item = this.head.item;
      this.head = this.head.next;

      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }

      this.size -= 1;

      return item;
    } else {
      return -1;
    }
  }

  pop() {
    if (this.size > 0) {
      const item = this.tail.item;
      this.tail = this.tail.prev;
      if (this.tail) {
        this.tail.next = null;
      } else {
        this.head = null;
      }

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
  const arr = input.map((ele) => ele.split(' ').map(Number));
  const dequeue = new Dequeue();
  let answer = '';

  arr.forEach((ele) => {
    const [command, value] = ele;

    switch (command) {
      case 1:
        dequeue.unshift(value);
        break;
      case 2:
        dequeue.push(value);
        break;
      case 3:
        answer += `${dequeue.shift()}` + '\n';
        break;
      case 4:
        answer += `${dequeue.pop()}` + '\n';
        break;
      case 5:
        answer += `${dequeue.getSize()}` + '\n';
        break;
      case 6:
        answer += `${dequeue.empty()}` + '\n';
        break;
      case 7:
        answer += `${dequeue.front()}` + '\n';
        break;
      case 8:
        answer += `${dequeue.back()}` + '\n';
        break;
      default:
        break;
    }
  });

  console.log(answer);
};

solution();