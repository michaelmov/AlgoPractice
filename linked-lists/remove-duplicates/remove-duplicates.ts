// You're given the head of a Singly Linked List whose nodes are in sorted order
// with respect to their values. Write a function that returns a modified version
// of the Linked List that doesn't contain any nodes with duplicate values. The
// Linked List should be modified in place (i.e., you shouldn't create a brand
// new list), and the modified Linked List should still have its nodes sorted
// with respect to their values.

// Each `LinkedList` node has an integer `value` as well as
// a `next` node pointing to the next node in the list or to
// `None` / `null` if it's the tail of the list.

export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

// O(n) time | O(1) space
export function removeDuplicatesFromLinkedList(linkedList: LinkedList) {
  // Loop through linked list
  let currentNode: LinkedList | null = linkedList;

  while (currentNode !== null) {
    let nextNode: LinkedList | null = currentNode.next;
    // See if "next" node's value is same as current node's value
    while (nextNode !== null && currentNode.value === nextNode.value) {
      // if yes, make next node be next node's "next" value
      nextNode = nextNode.next;
    }
    // make currentNode's "next" value the next node
    currentNode.next = nextNode;

    // make currentNode the next node
    currentNode = nextNode;
  }

  return linkedList;
}
