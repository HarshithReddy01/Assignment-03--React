import paper from "../assets/paper.png";
import rock from "../assets/rock.png";
import scissors from "../assets/scissors.png";
import type { Move } from "../game/rules";

const SOURCES: Record<Move, string> = { rock, paper, scissors };

type Props = {
  move: Move;
  size: number;
};

export default function MoveImage({ move, size }: Props) {
  return <img src={SOURCES[move]} alt={move} width={size} height={size} />;
}
