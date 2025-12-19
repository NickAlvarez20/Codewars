export function rps(p1: string, p2: string): string {
  if (p1 == p2) {
    return "Draw!";
  }
  if (
    (p1 === "scissors" && p2 === "paper") ||
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "paper" && p2 === "rock")
  ) {
    return "Player 1 won!";
  }
  return "Player 2 won!";
}


// Optimal Solution

const beats: { [index: string]: string } = {
  scissors: "paper",
  rock: "scissors",
  paper: "rock",
};

export function rps(p1: string, p2: string): string {
  if (p1 == p2) {
    return "Draw!";
  }
  if (beats[p1] == p2) {
    return "Player 1 won!";
  }
  return "Player 2 won!";
}
