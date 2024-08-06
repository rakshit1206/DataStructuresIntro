// create a class called LinkedList. It should have a head and tail property. It should have an instance method called append that will append to the linked list a node instance. Also a property called  insertAt that will insert a node at a given index
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Method to append a node to the end of the linked list
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // Method to insert a node at a given index
  insertAt(value, index) {
    if (index < 0 || index > this.length) {
      return "Index out of bounds";
    }

    const newNode = new Node(value);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      if (!this.tail) {
        this.tail = newNode;
      }
    } else {
      let current = this.head;
      let previous;
      let currentIndex = 0;

      while (currentIndex < index) {
        previous = current;
        current = current.next;
        currentIndex++;
      }

      newNode.next = current;
      previous.next = newNode;

      if (!newNode.next) {
        this.tail = newNode;
      }
    }
    this.length++;
  }

  // Method to print the linked list for debugging purposes
  printList() {
    const values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join(" -> "));
  }
}

// Example usage:
const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.printList(); // Output: 10 -> 20 -> 30

list.insertAt(15, 1);
list.printList(); // Output: 10 -> 15 -> 20 -> 30

list.insertAt(5, 0);
list.printList(); // Output: 5 -> 10 -> 15 -> 20 -> 30

list.insertAt(35, 5);
list.printList(); // Output: 5 -> 10 -> 15 -> 20 -> 30 -> 35
