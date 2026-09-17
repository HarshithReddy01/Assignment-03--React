import paper from "../assets/paper.svg";
import rock from "../assets/rock.svg";
import scissors from "../assets/scissors.svg";
import type { Move } from "../game/rules";

const SOURCES: Record<Move, string> = { rock, paper, scissors };

type Props = {
  move: Move;
  size: number;
};

export default function MoveImage({ move, size }: Props) {
  return <img src={SOURCES[move]} alt={move} width={size} height={size} />;
}
