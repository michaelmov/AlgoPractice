import { escapeMaze } from './escape-maze';

test('escapeMaze is defined', () => {
  expect(escapeMaze).toBeDefined();
});

test('should return correct result for Test Case #1', () => {
  // prettier-ignore
  const input = [
    'SSR', 
    'SLR', 
    'SXS'
  ];
  const expected = true;

  expect(escapeMaze(input, '>', 0, 0)).toEqual(expected);
});

test('should return correct result for Test Case #2', () => {
  // prettier-ignore
  const input = [
    'SSR', 
    'SLR', 
    'SSS'
  ];
  const expected = false;

  expect(escapeMaze(input, '>', 0, 0)).toEqual(expected);
});

test('should return correct result for Test Case #3', () => {
  // prettier-ignore
  const input = [
    'SSS', 
    'SLR', 
    'SXS'
  ];
  const expected = false;

  expect(escapeMaze(input, '>', 0, 0)).toEqual(expected);
});
