import { Node, LinkedList } from './linked-list-construction';

let ll: LinkedList;

beforeEach(() => {
  ll = new LinkedList();
});

test('LinkedList should be a defined class', () => {
  expect(ll).toBeInstanceOf(LinkedList);
});

test('Node should be a defined class', () => {
  const node = new Node(2);
  expect(node).toBeInstanceOf(Node);
});

test('setHead should return correct values when there is no head', () => {
  const head = new Node(1);

  ll.setHead(head);
  expect(ll.size).toEqual(1);
  expect(ll.valuesToArray()).toEqual([1]);
});

test('setHead should return correct values when there is already a head', () => {
  const val1 = new Node(1);
  const val2 = new Node(2);
  const val3 = new Node(3);

  ll.setHead(val1);
  ll.setHead(val2);
  ll.setHead(val3);

  expect(ll.size).toEqual(3);
  expect(ll.valuesToArray()).toEqual([3, 2, 1]);
});

test('setTail should return correct values', () => {
  const val1 = new Node(1);
  const val2 = new Node(2);
  const val3 = new Node(3);
  const val4 = new Node(4);

  ll.setTail(val1);
  ll.setTail(val2);
  ll.setHead(val3);
  ll.setTail(val4);

  expect(ll.size).toEqual(4);
  expect(ll.valuesToArray()).toEqual([3, 1, 2, 4]);
});

test('containsNodeWithValue should return correct values', () => {
  const val1 = new Node(1);
  const val2 = new Node(2);
  const val3 = new Node(3);
  const val4 = new Node(4);

  ll.setTail(val1);
  ll.setTail(val2);
  ll.setHead(val3);
  ll.setTail(val4);

  expect(ll.containsNodeWithValue(3)).toBeTruthy();
  expect(ll.containsNodeWithValue(8)).toBeFalsy();
  expect(ll.containsNodeWithValue(4)).toBeTruthy();
});
