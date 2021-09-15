import { smallestDifference, smallestDifference2 } from './smallest-difference';

// Solution 1
test('smallestDifference function is defined', () => {
  expect(smallestDifference).toBeDefined();
  expect(smallestDifference2).toBeDefined();
});

test('returns correct result 1', () => {
  const arrayOne = [3, 8, 12];
  const arrayTwo = [18, 4, 6, 22];

  expect(smallestDifference(arrayOne, arrayTwo)).toEqual([3, 4]);
  expect(smallestDifference2(arrayOne, arrayTwo)).toEqual([3, 4]);
});

test('returns correct result 2', () => {
  const arrayOne = [-1, 5, 10, 20, 28, 3];
  const arrayTwo = [26, 134, 135, 15, 17];

  expect(smallestDifference(arrayOne, arrayTwo)).toEqual([28, 26]);
  expect(smallestDifference2(arrayOne, arrayTwo)).toEqual([28, 26]);
});

test('returns correct result 3', () => {
  const arrayOne = [240, 124, 86, 111, 2, 84, 954, 27, 89];
  const arrayTwo = [1, 3, 954, 19, 8];

  expect(smallestDifference(arrayOne, arrayTwo)).toEqual([954, 954]);
  expect(smallestDifference2(arrayOne, arrayTwo)).toEqual([954, 954]);
});

test('returns correct result 4', () => {
  const arrayOne = [10, 1000, 9124, 2142, 59, 24, 596, 591, 124, -123, 530];
  const arrayTwo = [-1441, -124, -25, 1014, 1500, 660, 410, 245, 530];

  expect(smallestDifference(arrayOne, arrayTwo)).toEqual([530, 530]);
  expect(smallestDifference2(arrayOne, arrayTwo)).toEqual([530, 530]);
});
