export function getPermutations(array: number[]) {
  const permutations: number[][] = [];
  permutationsHelper(array, [], permutations);
  return permutations;
}

function permutationsHelper(arr: number[], currentPerm: number[], allPerms: number[][]) {
  if (!arr.length && currentPerm.length) {
    allPerms.push(currentPerm);
  }
  for (let i = 0; i < arr.length; i++) {
    const a = arr.slice(0, i);
    const b = arr.slice(i + 1);

    const newArr = [...a, ...b];
    const newPermutation = [...currentPerm, ...[arr[i]]];
    permutationsHelper(newArr, newPermutation, allPerms);
  }
}
