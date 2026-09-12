import queue from ".classwork/classwork.js";

const q = new queue();

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
q.enqueue(50);

const queue = [10, 20, 30, 40, 50];

console.log(queue[0]);

const q2 = new queue();
q2.enqueue("Luka");
q2.enqueue("Nika");
q2.enqueue("Giorgi");

const queue2 = [10, 20, 30];
queue2.push(40);

console.log(queue2);
