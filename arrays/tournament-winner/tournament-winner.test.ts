import { tournamentWinner, tournamentWinner2 } from "./tournament-winner";


const competitions = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"]
]
const results = [0, 0, 1]


test("tournamentWinner function is defined", () => {
  expect(tournamentWinner).toBeDefined();
});

test("Calling tournamentWinner returns correct result", () => {
  expect(tournamentWinner(competitions, results)).toEqual('Python')
}) 


test("tournamentWinner2 function is defined", () => {
  expect(tournamentWinner).toBeDefined();
});

test("Calling tournamentWinner2 returns correct result", () => {
  expect(tournamentWinner2(competitions, results)).toEqual('Python')
}) 