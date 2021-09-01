export function twoNumberSum(array: number[], targetSum: number): number[] {
  const hashTable: any = {};
  let sumNums: number[] = [];
  array.forEach((num) => {
    if (hashTable[targetSum - num]) {
      sumNums = [num, targetSum - num];
    }
    hashTable[num] = true;
  });

  return sumNums;
}

