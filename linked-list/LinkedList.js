const Node = require('./Node');

class LinkedList {
    // head must always refer to the first itme in the linked list
    // if this.head is null, then the list is empty
    head = null;

    add(newData) {
        let newNode = new Node(newData);
        // if the linked list is empty, this new node bceome the head
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    insertAt(newData, index) {
        let newNode = new Node(newData);
        if (index != 0) {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current.next;
            }
            newNode.next = current.next;
            current.next = newNode;
        } else {
            // if we are inserting at the head
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    deleteAt(index) {
        if (index != 0) {
            let current = this.head;
            for (let i = 0; i < index - 1; i++ ) {
                current = current.next
            }
            current.next = current.next.next;
        } else {
            // deleting the first node
            this.head = this.head.next;
            // to make sure that the head gets deleted do:
            // let oldHead = this.head;
            // this.head = oldHead.next;
            // oldHead = null;
        }
    }

    display() {
        let current = this.head;
        // below code stop at the 'null' value
        while (current != null) {
            console.log(current.data);
            current = current.next;
        }
    }

    length() {
        let count = 0;
        let current = this.head;
        while (current != null) {
            count++;
            current = current.next;
        }
        return count;
    }
}

module.exports = LinkedList;