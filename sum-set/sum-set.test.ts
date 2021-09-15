import { sumSet } from './sum-set';
const SUM_VALUE = 60;

test('sumSet function is defined', () => {
  expect(sumSet).toBeDefined();
});

test('sumSet returns correct output 1', () => {
  const inputArr = [20, 20, 20];
  const expectedOutput = [[20, 20, 20]];
  expect(sumSet(inputArr, SUM_VALUE)).toEqual(expectedOutput);
});

test('sumSet returns correct output 2', () => {
  const inputArr = [10, 20, 30, 40];
  const expectedOutput = [
    [10, 20, 30],
    [20, 40],
  ];
  expect(sumSet(inputArr, SUM_VALUE)).toEqual(expectedOutput);
});

test('sumSet returns correct output 3', () => {
  const inputArr = [10, 20, 30, 40, 50];
  const expectedOutput = [
    [10, 20, 30],
    [10, 50],
    [20, 40],
  ];
  expect(sumSet(inputArr, SUM_VALUE)).toEqual(expectedOutput);
});
