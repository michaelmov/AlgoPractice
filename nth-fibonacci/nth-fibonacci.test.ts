import { getNthFib, getNthFib2 } from './nth-fibonacci';

// test('getNthFib should be defined', () => {
//   expect(getNthFib).toBeDefined();
//   expect(getNthFib2).toBeDefined();
// });

// test('Should return correct result for 6', () => {
//   expect(getNthFib(6)).toEqual(5);
//   expect(getNthFib2(5)).toEqual(5);
// });

test('Should return correct result for 100', () => {
  expect(getNthFib(18)).toEqual(1597);
  expect(getNthFib2(18)).toEqual(1597);
});
