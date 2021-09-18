import { productSum } from './product-sum';

test('productSum should be defined', () => {
  expect(productSum).toBeDefined();
});

test('should return correct result for Test Case #1', () => {
  const input = [5, 2, [7, -1], 3, [6, [-13, 8], 4]];

  expect(productSum(input)).toEqual(12);
});

test('should return correct result for Test Case #2', () => {
  const input = [1, 2, 3, 4, 5];

  expect(productSum(input)).toEqual(15);
});

test('should return correct result for Test Case #3', () => {
  const input = [1, 2, [3], 4, 5];

  expect(productSum(input)).toEqual(18);
});

test('should return correct result for Test Case #4', () => {
  const input = [[1, 2], 3, [4, 5]];

  expect(productSum(input)).toEqual(27);
});

test('should return correct result for Test Case #5', () => {
  const input = [[[[[5]]]]];

  expect(productSum(input)).toEqual(600);
});
test('should return correct result for Test Case #6', () => {
  const input = [
    9,
    [2, -3, 4],
    1,
    [1, 1, [1, 1, 1]],
    [[[[3, 4, 1]]], 8],
    [1, 2, 3, 4, 5, [6, 7], -7],
    [1, [2, 3, [4, 5]], [6, 0, [7, 0, -8]], -7],
    [1, -3, 2, [1, -3, 2, [1, -3, 2], [1, -3, 2, [1, -3, 2]], [1, -3, 2]]],
    -3,
  ];

  expect(productSum(input)).toEqual(1351);
});
