// Given a string of characters 'str' , compress it using the following algorithm:

// Begin with an empty string. For each group of consecutive repeating characters in 'str':

// If the group's length is 1, append the character to the output string.
// Otherwise, append the character followed by the group's length.

// Example:
// Input: abccccddefff
// Output: abc4d2ef3

export function compressString(str: string): string {
  let prevChar = '';
  let repCounter = 1;
  let finalString = '';

  for (let i = 0; i <= str.length; i++) {
    const currentChar = str[i];

    if (currentChar !== prevChar) {
      if (repCounter > 1) {
        finalString += repCounter.toString();
        repCounter = 1;
      }
      if (currentChar) finalString += currentChar;
      prevChar = currentChar;
    } else {
      repCounter++;
    }
  }
  return finalString;
}
