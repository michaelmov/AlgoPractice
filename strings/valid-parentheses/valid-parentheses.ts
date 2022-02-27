export function isValidParentheses(s: string): boolean {
  if (!s.length || s.length === 1) return false;
  const bracketMap: { [key: string]: string } = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  let bracketHolder: string[] = [];

  if (Object.values(bracketMap).includes(s[0])) return false;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const prev = bracketHolder[bracketHolder.length - 1];

    if (char in bracketMap) {
      bracketHolder.push(char);
    } else if (prev !== undefined && bracketMap[prev] === char) {
      bracketHolder.pop();
    } else {
      return false;
    }
  }
  return bracketHolder.length === 0;
}
