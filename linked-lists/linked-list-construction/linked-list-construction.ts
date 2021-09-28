// This is an input class. Do not edit.
export class Node {
  value: number;
  next: Node | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

// Feel free to add new properties and methods to the class.
export class LinkedList {
  head: Node | null;
  size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  // O(1) time
  setHead(node: Node): void {
    if (!this.head) {
      this.head = node;
      this.size++;
      return;
    }

    const currentHead = this.head;
    this.head = node;
    this.head.next = currentHead;
    this.size++;
  }

  // O(n) time
  setTail(node: Node): void {
    let currentNode;

    if (!this.head) {
      this.setHead(node);
      return;
    }
    currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
    this.size++;
  }

  insertBefore(node: Node, nodeToInsert: Node) {
    // Write your code here.
  }

  insertAfter(node: Node, nodeToInsert: Node) {
    // Write your code here.
  }

  insertAtPosition(position: number, nodeToInsert: Node) {
    // Write your code here.
  }

  removeNodesWithValue(value: number) {
    // Write your code here.
  }

  remove(node: Node) {
    // Write your code here.
  }

  // O(n) time
  getValueAtPosition(position: number): number | null {
    if (position > this.size - 1 || position < 0) throw new Error('Position does not exist');
    let currentNode = this.head;
    let currentPos = 0;

    while (currentNode && currentPos < position) {
      currentNode = currentNode.next;
      currentPos++;
    }

    if (currentNode && currentNode.value) return currentNode.value;
    return null;
  }

  // O(n) time
  containsNodeWithValue(value: number): boolean {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.next;
    }

    return false;
  }

  // O(n) time
  valuesToArray(): number[] {
    let valArray: number[] = [];
    let currentNode = this.head;

    while (currentNode) {
      valArray.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return valArray;
  }
}
