import type { Scoreboard } from "../game/Scoreboard";

type Props = {
  score: Scoreboard;
  onReset: () => void;
};

export default function ScorePanel({ score, onReset }: Props) {
  return (
    <div className="score">
      <dl>
        <div>
          <dt>Wins</dt>
          <dd>{score.wins}</dd>
        </div>
        <div>
          <dt>Losses</dt>
          <dd>{score.losses}</dd>
        </div>
        <div>
          <dt>Ties</dt>
          <dd>{score.ties}</dd>
        </div>
        <div>
          <dt>Total</dt>
          <dd>{score.total}</dd>
        </div>
        <div>
          <dt>Win %</dt>
          <dd>{score.winRate.toFixed(1)}%</dd>
        </div>
      </dl>
      <button
        type="button"
        className="reset"
        onClick={onReset}
        disabled={score.total === 0}
      >
        Reset
      </button>
    </div>
  );
}
