/*
Suppose we have some input data describing a graph of relationships between parents and children over multiple families and generations. The data is formatted as a list of (parent, child) pairs, where each individual is assigned a unique positive integer identifier.

For example, in this diagram, 3 is a child of 1 and 2, and 5 is a child of 4:

1   2    4           30
 \ /   /  \           \ 
  3   5    9  15      16
   \ / \    \ / 
    6   7   12  


Sample input/output (pseudodata):

parentChildPairs = [
    (5, 6), (1, 3), (2, 3), (3, 6), (15, 12),
    (5, 7), (4, 5), (4, 9), (9, 12), (30, 16)
]


Write a function that takes this data as input and returns two collections: one containing all individuals with zero known parents, and one containing all individuals with exactly one known parent.


Output may be in any order:

findNodesWithZeroAndOneParents(parentChildPairs) => [
  [1, 2, 4, 15, 30],   // Individuals with zero parents
  [5, 7, 9, 16]        // Individuals with exactly one parent
]

Complexity Analysis variables:

n: number of pairs in the input



*/

export function findNodesWithZeroAndOneParents(parentChildPairs: number[][]) {
  let zeroParents: number[] = [];
  let oneParent: number[] = [];
  const map: { [key: number]: number[] } = {};

  parentChildPairs.forEach((pair) => {
    const parent = pair[0];
    const child = pair[1];

    if (map[parent]) {
      map[parent].push(child);
    } else {
      map[parent] = [child];
    }
  });

  let childArray: any = [];
  for (let parent in map) {
    childArray.push(map[parent]);
  }
  childArray = childArray.flat();

  let parentArray = Object.keys(map).map((parent) => parseInt(parent));

  parentArray.forEach((parent: any) => {
    const parsedParent = parseInt(parent);
    if (!childArray.includes(parsedParent)) zeroParents.push(parsedParent);
  });

  childArray.forEach((child: number) => {
    if (!parentArray.includes(child) || parentArray.includes(child)) oneParent.push(child);
  });

  oneParent = oneParent
    .filter((item) => {
      return oneParent.lastIndexOf(item) === oneParent.indexOf(item);
    })
    .sort((a, b) => a - b);

  return [zeroParents, oneParent];
}
