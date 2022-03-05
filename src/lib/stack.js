const Node = require('./node');

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    return this.top = new Node(value, this.top);
  }

  pop() {
    const popped = this.top;
    this.top = popped.next;
    return popped.value;
  }
}

module.exports = Stack;
