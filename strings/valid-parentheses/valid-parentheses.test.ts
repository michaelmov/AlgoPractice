import { isValidParentheses } from './valid-parentheses';

test('isValidParentheses should be defined', () => {
  expect(isValidParentheses).toBeDefined;
});

test('should pass Test Cases #1', () => {
  expect(isValidParentheses(']{')).toEqual(false);
});

test('should pass Test Cases #2', () => {
  expect(isValidParentheses('{[]}')).toEqual(true);
});

test('should pass Test Cases #4', () => {
  expect(isValidParentheses('{[}}')).toEqual(false);
});

test('should pass Test Cases #5', () => {
  expect(isValidParentheses('{[()]}')).toEqual(true);
});

test('should pass Test Cases #5', () => {
  expect(isValidParentheses(')(){}')).toEqual(false);
});
