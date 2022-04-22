const Stack = require('./Stack');

const s = new Stack();
s.push("Apples");
s.push("Bananas");
s.push("Oranges");
s.list.display();
console.log('s.peek() =>', s.peek());
s.pop();
console.log('s.peek() =>', s.peek());