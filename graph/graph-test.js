const Node = require('./Node');
const Graph = require('./Graph');

let g = new Graph();

g.addNode(new Node("A", "A"));
g.addNode(new Node("B", "B"));
g.addNode(new Node("C", "C"));
g.addNode(new Node("D", "D"));
g.addNode(new Node("E", "E"));
g.addNode(new Node("F", "F"));
g.addNode(new Node("G", "G"));

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "E");
g.addEdge("B", "F");
g.addEdge("C", "D");
g.addEdge("F", "G");

// for (let key in g.nodes) {
//     console.log(g.nodes[key])
// }

g.bfs("A");
console.log("--------");
g.dfs("A");