const Queue = require('./Queue');

const q = new Queue();
q.enqueue("Apples");
q.enqueue("Bananas");
q.enqueue("Oranges");

console.log("Front of queue =>", q.peek());
q.dequeue();
console.log("Front of queue =>", q.peek());
q.dequeue();
console.log("Front of queue =>", q.peek());
q.dequeue();
console.log("Front of queue =>", q.peek());