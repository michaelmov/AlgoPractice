export function firstDuplicateValue(array: number[]) {
  const map: { [key: number]: boolean } = {};
  let repeatingNumber: number | null = null;

  for (const num of array) {
    if (map[num]) {
      repeatingNumber = num;
      return;
    }
    map[num] = true;
  }
  return repeatingNumber;
}
