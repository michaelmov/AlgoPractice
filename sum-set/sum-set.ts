// O(2^n) time | O(n) space

export function sumSet(arr: number[], target: number): number[][] {
  let output: number[][] = [];

  if (sum(arr) === target) {
    output.push(arr);
    return output;
  }

  const subsetSum = (numbers: number[], partial: number[] = []) => {
    let n: number = 0;
    let remaining: number[];

    // base case
    if (sum(partial) === target) output.push(partial);
    if (sum(partial) >= target) return;

    for (let i = 0; i < numbers.length; i++) {
      n = numbers[i];
      remaining = numbers.slice(i + 1);
      const newPartial = partial.concat([n]);
      subsetSum(remaining, newPartial);
    }
  };

  subsetSum(arr);

  return output;
}

function sum(arr: number[]): number {
  return arr.reduce((a, b) => a + b, 0);
}
