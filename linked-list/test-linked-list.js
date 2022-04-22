
const LinkedList = require('./LinkedList');

let list = new LinkedList();
list.add("Apples");
list.add("Bananas");
list.add("Oranges");
list.insertAt("Durian", 1)
list.insertAt("Cherries", 0);
list.insertAt("Mangos", 5);
list.display();
console.log("Length of list =", list.length())
console.log("Delete index 2")
list.deleteAt(2);
list.display();
console.log("Delete first node");
list.deleteAt(0);
list.display();
console.log("After delete the last node:")
list.deleteAt(3);
list.display();