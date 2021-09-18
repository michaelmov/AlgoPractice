import { isValidSubsequence } from './valid-subsequence';

test('isValidSubsequence returns correct result', () => {
  const array = [5, 1, 22, 25, 6, -1, 8, 10];
  const sequence = [1, 6, -1, 10];

  expect(isValidSubsequence(array, sequence)).toEqual(true);
});
