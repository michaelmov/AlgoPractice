import { findNodesWithZeroAndOneParents } from './find-nodes-with-zero-and-one-parents';

const parentChildPairs = [
  [5, 6],
  [1, 3],
  [2, 3],
  [3, 6],
  [15, 12],
  [5, 7],
  [4, 5],
  [4, 9],
  [9, 12],
  [30, 16],
];

test('findNodesWithZeroAndOneParents should be defined', () => {
  expect(findNodesWithZeroAndOneParents).toBeDefined();
});

test('findNodesWithZeroAndOneParents should return correct result', () => {
  const expected = [
    [1, 2, 4, 15, 30],
    [5, 7, 9, 16],
  ];
  expect(findNodesWithZeroAndOneParents(parentChildPairs)).toEqual(expected);
});
