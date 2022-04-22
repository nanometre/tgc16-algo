const LinkedList = require('../linked-list/LinkedList');
// Last in, first out data structure
// application: 
// 1. to check for unbalanced parentheses (https://leetcode.com/problems/valid-parentheses/)
// 2. undo/browser history
class Stack {
    constructor() {
        this.list = new LinkedList()
    }
    
    // push is to add new data to the TOP of the stack
    push(newData) {
        this.list.insertAt(newData, 0)
    }

    // pop is to remove the data from the TOP of the stack
    pop() {
        this.list.deleteAt(0)
    }

    peek() {
        return this.list.getAt(0);
    }
}

module.exports = Stack;