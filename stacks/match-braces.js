const Stack = require('./Stack');

const s = new Stack;
let str = "if (2+2==4} {}";
for (let c of str) {
    if (c=='(' || c=='{') {
        s.push(c);
    }
    if (c==')') {
        if (s.peek() != '(') {
            console.log("Unmatched closing bracket");
            break;
        } else {
            s.pop();
        }
    }
    if (c=='}') {
        if (s.peek() != "{") {
            console.log("Unmatched closing brace");
            break;
        } else {
            s.pop();
        }
    }
}
if (s.peek() != null) {
    console.log("There are still unmatched opening brackets or braces");
}