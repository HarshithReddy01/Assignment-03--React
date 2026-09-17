import { useState } from "react";
import "./App.css";
import MovePicker from "./components/MovePicker";
import RoundResult from "./components/RoundResult";
import ScorePanel from "./components/ScorePanel";
import { Round } from "./game/Round";
import { Scoreboard } from "./game/Scoreboard";
import type { Move } from "./game/rules";

export default function App() {
  const [round, setRound] = useState<Round | null>(null);
  const [score, setScore] = useState(new Scoreboard());

  function play(move: Move) {
    const next = Round.play(move);
    setRound(next);
    setScore((current) => current.record(next.outcome));
  }

  function reset() {
    setRound(null);
    setScore(new Scoreboard());
  }

  return (
    <main className="app">
      <h1>Rock Paper Scissors</h1>
      <MovePicker onPick={play} />
      {round ? (
        <RoundResult round={round} />
      ) : (
        <p className="hint">Pick a move to start.</p>
      )}
      <ScorePanel score={score} onReset={reset} />
    </main>
  );
}
