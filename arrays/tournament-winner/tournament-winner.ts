
//   There's an algorithms tournament taking place in which teams of programmers
//   compete against each other to solve algorithmic problems as fast as possible.
//   Teams compete in a round robin, where each team faces off against all other
//   teams. Only two teams compete against each other at a time, and for each
//   competition, one team is designated the home team, while the other team is the
//   away team. In each competition there's always one winner and one loser; there
//   are no ties. A team receives 3 points if it wins and 0 points if it loses. The
//   winner of the tournament is the team that receives the most amount of points.

//   Given an array of pairs representing the teams that have competed against each
//   other and an array containing the results of each competition, write a
//   function that returns the winner of the tournament. The input arrays are named
//   `competitions` and `results`, respectively. The
//   `competitions` array has elements in the form of
//   `[homeTeam, awayTeam]`, where each team is a string of at most 30
//   characters representing the name of the team. The `results` array
//   contains information about the winner of each corresponding competition in the
//   `competitions` array. Specifically, `results[i]` denotes
//   the winner of `competitions[i]`, where a `1` in the
//   `results` array means that the home team in the corresponding
//   competition won and a `0` means that the away team won.

//   It's guaranteed that exactly one team will win the tournament and that each
//   team will compete against all other teams exactly once. It's also guaranteed
//   that the tournament will always have at least two teams.


// Solution 1
// O(nlogn) time - n is number of matches |  O(k) space - k is number of teams
export function tournamentWinner(competitions: string[][], results: number[]): string {
  const scoreboard: {[key: string]: number} = {}
  let tournamentWinner = ''
  
  results.forEach((result, idx) => {
    let matchWinner;
    if (result === 1) {
      matchWinner = competitions[idx][0]
    } else {
      matchWinner = competitions[idx][1]
    }

    scoreboard[matchWinner] = isNaN(scoreboard[matchWinner]) ? 3 : scoreboard[matchWinner] + 3

  })
  tournamentWinner = Object.keys(scoreboard).reduce((a, b) => scoreboard[a] > scoreboard[b] ? a : b );

  return tournamentWinner
}



// Solution 2
// O(n) time - n is number of matches |  O(k) space - k is number of teams
export function tournamentWinner2(competitions: string[][], results: number[]): string {
  let bestTeam = '';
  const scoreboard = {[bestTeam]: 0};

  for (let i = 0; i < competitions.length; i++) {
    const [homeTeam, awayTeam] = competitions[i];
    const result = results[i]
    const winningTeam = result === 1 ? homeTeam : awayTeam


    // Initialize winning team to 0 if it isn't found in the scoreboard
    if(!(winningTeam in scoreboard)) scoreboard[winningTeam] = 0

    scoreboard[winningTeam] += 3

    // Swap best team if winning team has the higher overall tournament score
    if(scoreboard[winningTeam] > scoreboard[bestTeam]) {
      bestTeam = winningTeam;
    }
  }

  return bestTeam
}
