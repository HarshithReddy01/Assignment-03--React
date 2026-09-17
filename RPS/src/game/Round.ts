import { judge, randomMove, type Move, type Outcome } from "./rules";

export class Round {
  readonly player: Move;
  readonly computer: Move;
  readonly outcome: Outcome;

  constructor(player: Move, computer: Move) {
    this.player = player;
    this.computer = computer;
    this.outcome = judge(player, computer);
  }

  static play(player: Move): Round {
    return new Round(player, randomMove());
  }
}
