class stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

let myStack = new stack();

myStack.push(10);
myStack.push(20);
myStack.push(30);

console.log(myStack.pop()); // Output: 30
console.log(myStack.peek()); // Output: 20
console.log(myStack.size()); // Output: 2
console.log(myStack.isEmpty()); // Output: false

let myStack2 = new stack();
myStack2.push(5);
myStack2.push(10);
myStack2.push(15);
myStack2.push(20);
myStack2.push(25);

myStack2.pop();
myStack2.pop();

console.log(myStack2);

let myStack3 = new stack();
myStack3.push(100);
console.log(myStack3.peek()); // Output: 100
myStack3.push(200);
console.log(myStack3.peek()); // Output: 200
myStack3.push(300);
console.log(myStack3.peek()); // Output: 300
myStack3.push(400);
console.log(myStack3.peek()); // Output: 400


function addEvenNumbers(arr) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      myStack.push(arr[i]);
    }
    }

    return myStack;
}

addEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


