const LinkedList = require('../linked-list/LinkedList');
// First in, first out data structure
class Queue {
    constructor() {
        this.list = new LinkedList();
    }

    // add at the back of the list
    enqueue(newData) {
        this.list.add(newData);
    }

    // remove the front of queue
    dequeue() {
        this.list.deleteAt(0);
    }

    // peek is to see what's at the front
    peek() {
        return this.list.getAt(0);
    }
}

module.exports = Queue;