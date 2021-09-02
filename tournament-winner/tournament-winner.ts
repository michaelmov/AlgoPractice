// Solution 1
// O(n) time - n is number of matches |  O(k) space - k is number of teams
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
