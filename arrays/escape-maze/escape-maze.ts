// Consider a rectangular maze. Each square has a label. At each turn:

// You move forward one square:
// If this puts you outside of the maze, you lose.
// Otherwise, you take an action based on the label of the square where you have just arrived:
// R - turn 90 degrees clockwise (right).
// L - turn 90 degrees anticlockwise (left).
// S - continue straight.
// X - declare victory: You've won!
// I choose the starting position; you choose what direction you start facing. Can you make it to one of the goal (X) squares?

// Write a function run which takes three arguments: A maze encoded as a sequence of strings (from top-to-bottom),
// a starting row, and a starting column and returns a Boolean value indicating whether it's possible for you to choose
// a direction such that you can reach an X from that position.

// Here's an example. Let's suppose that I choose the first row and the middle column as your starting position; further,
// assume that you choose to face right; time unfolds left-to-right; we'll surround the current position with direction indicators
// (> = right, < = left, ^ = up, v = down):

//  S>S>R         S S>R>          S SvRv         S S R          S S R
//  S L R -move-> S L R  -turn->  S L R  -move-> S LvRv -turn-> S L<R< -move->
//  S X S         S X S           S X S          S X S          S X S

//               S S R         S S R         S S R
//       -move-> S<L<R -turn-> SvLvR -move-> S L R -> win!
//               S X S         S X S         SvXvS

interface IDirectionMap {
  [key: string]: { [key: string]: string };
}
const directionMap: IDirectionMap = {
  ">": {
    R: "v",
    S: ">",
    L: "^",
  },
  v: {
    R: "<",
    S: "v",
    L: ">",
  },
  "^": {
    R: ">",
    S: "^",
    L: "<",
  },
  "<": {
    R: "^",
    S: "<",
    L: "v",
  },
};

export function escapeMaze(maze: string[], initialDir: string, startX: number, startY: number): Boolean {
  if (startY > maze.length - 1) return false;
  if (startX > maze[startY].length - 1) return false;

  const instruction: string = maze[startY][startX];

  if (instruction === "X") return true;

  const newDirection = directionMap[initialDir][instruction];

  if (newDirection === ">") {
    return escapeMaze(maze, newDirection, startX + 1, startY);
  } else if (newDirection === "v") {
    return escapeMaze(maze, newDirection, startX, startY + 1);
  } else if (newDirection === "<") {
    return escapeMaze(maze, newDirection, startX - 1, startY);
  } else {
    return escapeMaze(maze, newDirection, startX, startY - 1);
  }
}
