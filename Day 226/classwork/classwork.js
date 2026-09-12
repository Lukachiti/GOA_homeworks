class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedListQueue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const removedValue = this.head.value;
    this.head = this.head.next;
    this.size--;
    if (this.isEmpty()) {
      this.tail = null;
    }
    return removedValue;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.head.value;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }
    let current = this.head;
    let queueValues = "Front -> ";
    while (current) {
      queueValues += `${current.value} `;
      current = current.next;
    }
    queueValues += "<- Rear";
    console.log(queueValues);
  }
}