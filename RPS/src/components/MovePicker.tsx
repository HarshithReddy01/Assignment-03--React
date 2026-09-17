import { MOVES, type Move } from "../game/rules";
import MoveImage from "./MoveImage";

type Props = {
  onPick: (move: Move) => void;
};

export default function MovePicker({ onPick }: Props) {
  return (
    <div className="picker">
      {MOVES.map((move) => (
        <button
          key={move}
          className="pick"
          type="button"
          onClick={() => onPick(move)}
        >
          <MoveImage move={move} size={72} />
          <span>{move}</span>
        </button>
      ))}
    </div>
  );
}
