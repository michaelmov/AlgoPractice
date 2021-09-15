import {
  LinkedList,
  removeDuplicatesFromLinkedList,
} from './remove-duplicates';

test('LinkedList should be defined', () => {
  expect(LinkedList).toBeDefined();
});

test('removeDuplicatesFromLinkedList should be defined', () => {
  expect(removeDuplicatesFromLinkedList).toBeDefined();
});

test('Test Case #1', () => {
  const input = addMany(new LinkedList(1), [1, 3, 4, 4, 4, 5, 6, 6]);
  const expected = addMany(new LinkedList(1), [3, 4, 5, 6]);
  const actual = removeDuplicatesFromLinkedList(input);
  expect(getNodesInArray(actual)).toEqual(getNodesInArray(expected));
});

function addMany(linkedList: LinkedList, values: number[]) {
  let current = linkedList;
  while (current.next !== null) {
    current = current.next;
  }
  for (const value of values) {
    current.next = new LinkedList(value);
    current = current.next;
  }
  return linkedList;
}

function getNodesInArray(linkedList: LinkedList) {
  const nodes: number[] = [];
  let current: LinkedList | null = linkedList;
  while (current !== null) {
    nodes.push(current.value);
    current = current.next;
  }
  return nodes;
}
