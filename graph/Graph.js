const Queue = require('../queues/Queue')
const Stack = require('../stacks/Stack')

class Graph {
    constructor() {
        this.nodes = {};
    }

    addNode(node) {
        this.nodes[node.id] = node;
    }

    // add an edge going from node1 to node2, and from node2 to node1
    // bi directional
    addEdge(startNodeID, endNodeID) {
        let startNode = this.nodes[startNodeID];
        let endNode = this.nodes[endNodeID];
        startNode.addNeighbour(endNode);
        endNode.addNeighbour(startNode);
    }

    bfs(startNodeID) {
        let q = new Queue();
        let startNode = this.nodes[startNodeID];
        q.enqueue(startNode);
        let visited = [];
        while(q.peek() != null) {
            let front = q.peek();
            if (visited.includes(front.id)) {
                q.dequeue();
                continue;
            }
            console.log("Visited: " + front.getData());
            visited.push(front.id);
            q.dequeue(); 
            for (let n of front.getNeighbours()) {
                // check if n has been visited before
                if (visited.includes(n.id) === false) {
                    q.enqueue(n);
                }
            }
        }
    }

    // difference between bfs and dfs 
    // push <-> enqueue
    // pop <-> dequeue
    dfs(startNodeID) {
        let q = new Stack();
        let startNode = this.nodes[startNodeID];
        q.push(startNode);
        let visited = [];
        while(q.peek() != null) {
            let front = q.peek();
            if (visited.includes(front.id)) {
                q.pop();
                continue;
            }
            console.log("Visited: " + front.getData());
            visited.push(front.id);
            q.pop(); 
            for (let n of front.getNeighbours()) {
                // check if n has been visited before
                if (visited.includes(n.id) === false) {
                    q.push(n);
                }
            }
        }
    }
}

module.exports = Graph;