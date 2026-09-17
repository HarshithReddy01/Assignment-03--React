import type { Round } from "../game/Round";
import type { Outcome } from "../game/rules";
import MoveImage from "./MoveImage";

const MESSAGES: Record<Outcome, string> = {
  win: "You win",
  loss: "You lose",
  tie: "Tie",
};

type Props = {
  round: Round;
};

export default function RoundResult({ round }: Props) {
  return (
    <div className="result">
      <div className="hands">
        <figure>
          <MoveImage move={round.player} size={120} />
          <figcaption>
            You picked <span className="move">{round.player}</span>
          </figcaption>
        </figure>
        <span className="versus">vs</span>
        <figure>
          <MoveImage move={round.computer} size={120} />
          <figcaption>
            Computer picked <span className="move">{round.computer}</span>
          </figcaption>
        </figure>
      </div>
      <p className={`message ${round.outcome}`}>{MESSAGES[round.outcome]}</p>
    </div>
  );
}
