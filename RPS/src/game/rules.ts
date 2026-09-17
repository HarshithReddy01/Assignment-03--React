export const MOVES = ["rock", "paper", "scissors"] as const;

export type Move = (typeof MOVES)[number];

export type Outcome = "win" | "loss" | "tie";

const BEATS: Record<Move, Move> = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper",
};

export function randomMove(): Move {
  return MOVES[Math.floor(Math.random() * MOVES.length)];
}

export function judge(player: Move, computer: Move): Outcome {
  if (player === computer) return "tie";
  return BEATS[player] === computer ? "win" : "loss";
}
