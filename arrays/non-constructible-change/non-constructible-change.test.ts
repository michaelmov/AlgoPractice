import { nonConstructibleChange } from './non-constructible-change';

test('nonConstructibleChange function is defined', () => {
  expect(nonConstructibleChange).toBeDefined();
});

test('nonConstructibleChange function returns a correct value', () => {
  const input = [1, 1, 4];

  expect(nonConstructibleChange(input)).toEqual(3);
});

test('nonConstructibleChange function returns a correct value', () => {
  const input = [1, 1, 3];

  expect(nonConstructibleChange(input)).toEqual(6);
});

test('nonConstructibleChange function returns a correct value', () => {
  const input = [5, 7, 1, 1, 2, 3, 22];

  expect(nonConstructibleChange(input)).toEqual(20);
});
