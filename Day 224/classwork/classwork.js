// Minimal Node class: holds only state
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// FIFO Queue implementation (All operations O(1))
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0; // Fixed: initialize length counter
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++; // Fixed: increment length
  }

  dequeue() {
    if (!this.head) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
    this.length--; // Fixed: decrement length
    return value;
  }

  isEmpty() {
    return this.head === null;
  }

  size() {
    return this.length;
  }
}

export default Queue;