// Create a class called Stack. It should have a method to push, pop and peek
class Stack {
  constructor() {
    this.items = [];
  }

  // Method to push an element onto the stack
  push(element) {
    this.items.push(element);
  }

  // Method to pop an element off the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  // Method to peek at the top element of the stack
  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }
}

// Example usage:
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.peek()); // Output: 30
console.log(stack.pop()); // Output: 30
console.log(stack.peek()); // Output: 20
