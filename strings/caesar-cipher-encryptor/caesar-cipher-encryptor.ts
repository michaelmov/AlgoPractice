//
//   Given a non-empty string of lowercase letters and a non-negative integer
//   representing a key, write a function that returns a new string obtained by
//   shifting every letter in the input string by k positions in the alphabet,
//   where k is the key.
//
//   Note that letters should "wrap" around the alphabet; in other words, the
//   letter z shifted by one returns the letter a.
//

// O(n) time | O(n) space
export function caesarCipherEncryptor(string: string, key: number): string {
  let encryptedString: string = '';

  for (let i = 0; i < string.length; i++) {
    const letter = string[i];
    let newKey = key % 26;
    let newCode = letter.charCodeAt(0) + newKey;

    if (newCode <= 122) {
      encryptedString += String.fromCharCode(newCode);
    } else {
      encryptedString += String.fromCharCode(96 + (newCode % 122));
    }
  }

  return encryptedString;
}
