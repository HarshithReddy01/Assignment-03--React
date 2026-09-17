import type { Outcome } from "./rules";

export class Scoreboard {
  readonly wins: number;
  readonly losses: number;
  readonly ties: number;

  constructor(wins = 0, losses = 0, ties = 0) {
    this.wins = wins;
    this.losses = losses;
    this.ties = ties;
  }

  get total(): number {
    return this.wins + this.losses + this.ties;
  }

  get winRate(): number {
    return this.total === 0 ? 0 : (this.wins / this.total) * 100;
  }

  record(outcome: Outcome): Scoreboard {
    switch (outcome) {
      case "win":
        return new Scoreboard(this.wins + 1, this.losses, this.ties);
      case "loss":
        return new Scoreboard(this.wins, this.losses + 1, this.ties);
      case "tie":
        return new Scoreboard(this.wins, this.losses, this.ties + 1);
    }
  }
}
