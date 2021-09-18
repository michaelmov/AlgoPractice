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
