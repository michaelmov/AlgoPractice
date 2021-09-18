import { firstDuplicateValue } from './first-duplicate-value';

test('firstDuplicateValue should be defined', () => {
  expect(firstDuplicateValue).toBeDefined();
});

test('test case #1', () => {
  const input = [2, 1, 5, 2, 3, 3, 4];
  const expected = 2;

  expect(firstDuplicateValue(input)).toEqual(expected);
});
