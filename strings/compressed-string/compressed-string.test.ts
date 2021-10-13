import { compressString } from './compressed-string';

test('compressedString should be defined', () => {
  expect(compressString).toBeDefined;
});

test('should pass Test Cases #1', () => {
  const input = 'abccccddefff';
  const expected = 'abc4d2ef3';

  expect(compressString(input)).toEqual(expected);
});

test('should pass Test Cases #2', () => {
  const input = 'abccccddef';
  const expected = 'abc4d2ef';

  expect(compressString(input)).toEqual(expected);
});

test('should pass Test Cases #3', () => {
  const input = 'aabccccddef';
  const expected = 'a2bc4d2ef';

  expect(compressString(input)).toEqual(expected);
});

test('should pass Test Cases #4', () => {
  const input = 'aaabaaaaccaaaaba';
  const expected = 'a3ba4c2a4ba';

  expect(compressString(input)).toEqual(expected);
});
