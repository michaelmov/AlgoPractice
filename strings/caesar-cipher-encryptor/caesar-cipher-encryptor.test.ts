import { caesarCipherEncryptor } from './caesar-cipher-encryptor';

test('caesarCipherEncryptor should be defined', () => {
  expect(caesarCipherEncryptor).toBeDefined();
});

test('should return correct result for abc - 1', () => {
  expect(caesarCipherEncryptor('abc', 1)).toEqual('bcd');
});

test('should return correct result for abc - 2', () => {
  expect(caesarCipherEncryptor('abc', 2)).toEqual('cde');
});

test('should return correct result for abc - 52', () => {
  expect(caesarCipherEncryptor('abc', 52)).toEqual('abc');
});

test('should return correct result for xyz - 1', () => {
  expect(caesarCipherEncryptor('xyz', 1)).toEqual('yza');
});

test('should return correct result for xyz - 2', () => {
  expect(caesarCipherEncryptor('xyz', 2)).toEqual('zab');
});
