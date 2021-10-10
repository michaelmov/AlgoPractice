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

  // O(n)
  insertAtPosition(position: number, nodeToInsert: Node): void {
    if (position <= 0) {
      this.setHead(nodeToInsert);
      return;
    }

    if (position > this.size - 1) {
      this.setTail(nodeToInsert);
      return;
    }

    let pervNode: Node | null = this.getNodeAtPosition(position - 1);
    let nextNode: Node | null = this.getNodeAtPosition(position);
    if (nextNode) nodeToInsert.next = nextNode;
    if (pervNode) pervNode.next = nodeToInsert;
    this.size++;
  }

  // O(n) time
  removeNodesWithValue(value: number): void {
    if (!this.head) return;
    if (this.head.value === value) {
      this.head = this.head.next;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.next?.value === value) {
        currentNode.next = currentNode.next.next;
      }
      currentNode = currentNode.next;
    }

    return;
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
  getNodeAtPosition(position: number): Node | null {
    if (position > this.size - 1 || position < 0) throw new Error('Position does not exist');
    let currentNode = this.head;
    let currentPos = 0;

    while (currentNode && currentPos < position) {
      currentNode = currentNode.next;
      currentPos++;
    }

    if (currentNode && currentNode.value) return currentNode;
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
