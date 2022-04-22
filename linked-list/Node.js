class Node {
    data = null;
    next = null; // refer to the next neighbout in the list
    constructor(data) {
        this.data = data;
    }
    // this is the industry way to "get next" or "set next" or "get data"
    // but in "LinkedList.js" Paul directly implement it in the same file
    getNext() {
        return this.next;
    }
    setNext(nextNode) {
        this.next = nextNode;
    }
    getData() {
        return this.data;
    }
}

module.exports = Node;