//   Write a function that takes in two non-empty arrays of integers, finds the
//   pair of numbers (one from each array) whose absolute difference is closest to
//   zero, and returns an array containing these two numbers, with the number from
//   the first array in the first position.

//   Note that the absolute difference of two integers is the distance between
//   them on the real number line. For example, the absolute difference of -5 and 5
//   is 10, and the absolute difference of -5 and -4 is 1.

//   You can assume that there will only be one pair of numbers with the smallest
//   difference.

// Solution 1

// O(nLog(n) + mLog(m)) time - n is length of arrayOne and m is length of arrayTwo. Log because we are sorting
// O(1) space - sorting in place and not using any additional memory
export function smallestDifference(arrayOne: number[], arrayTwo: number[]) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let idxOne = 0;
  let idxTwo = 0;
  let smallestPair = [0, 0];
  let currentSmallestDiff: number | null = null;

  while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
    let diffNumber = Math.abs(arrayOne[idxOne] - arrayTwo[idxTwo]);

    if (!currentSmallestDiff && typeof currentSmallestDiff !== 'number') {
      currentSmallestDiff = diffNumber;
      smallestPair = [arrayOne[idxOne], arrayTwo[idxTwo]];
    }

    if (diffNumber < currentSmallestDiff || diffNumber === 0) {
      currentSmallestDiff = diffNumber;
      smallestPair = [arrayOne[idxOne], arrayTwo[idxTwo]];
    }

    idxTwo++;

    if (idxTwo >= arrayTwo.length) {
      idxOne++;
      idxTwo = 0;
    }
  }

  return smallestPair;
}

// Solution 2

// O(nLog(n) + mLog(m)) time - n is length of arrayOne and m is length of arrayTwo. Log because we are sorting
// O(1) space - sorting in place and not using any additional memory
export function smallestDifference2(arrayOne: number[], arrayTwo: number[]) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let idxOne = 0;
  let idxTwo = 0;
  let smallestPair: number[] = [];
  let current = Infinity;
  let smallest = Infinity;

  while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
    const firstNumber = arrayOne[idxOne];
    const secondNumber = arrayTwo[idxTwo];

    if (firstNumber < secondNumber) {
      current = secondNumber - firstNumber;
      idxOne++;
    } else if (secondNumber < firstNumber) {
      idxTwo++;
      current = firstNumber - secondNumber;
    } else {
      return [firstNumber, secondNumber];
    }

    if (smallest > current) {
      smallest = current;
      smallestPair = [firstNumber, secondNumber];
    }
  }

  return smallestPair;
}
