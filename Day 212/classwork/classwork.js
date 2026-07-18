class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  
  add(data) {
    const newnode = new Node(data);
    
    if (!this.head) { 
      this.head = newnode;
      this.tail = newnode;
      return;
    }

    newnode.next = this.head;
    this.head.prev = newnode;
    this.head = newnode;
  }

  
  

  
  delete(data) {
    let current = this.head;

    while (current) {
      if (current.data === data) {
        // Case 1: If it's the head node
        if (current === this.head) {
          this.head = current.next;
          if (this.head) {
            this.head.prev = null;
          } else {
            this.tail = null; // List became empty
          }
        } 
        // Case 2: If it's the tail node
        else if (current === this.tail) {
          this.tail = current.prev;
          this.tail.next = null;
        } 
        // Case 3: If it's a middle node
        else {
          current.prev.next = current.next;
          current.next.prev = current.prev;
        }
        return true; // Node found and deleted
      }
      current = current.next;
    }
    return false; // Node not found
  }

  // Print the list from head to tail
  displayForward() {
    const elements = [];
    let current = this.head;
    while (current) {
      elements.push(current.data);
      current = current.next;
    }
    console.log(elements.length ? elements.join(" <-> ") : "Empty List");
  }

  // Print the list from tail to head
  displayBackward() {
    const elements = [];
    let current = this.tail;
    while (current) {
      elements.push(current.data);
      current = current.prev;
    }
    console.log(elements.length ? elements.join(" <-> ") : "Empty List");
  }
}