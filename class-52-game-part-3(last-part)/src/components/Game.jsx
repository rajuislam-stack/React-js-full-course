
import { useState } from "react";
import Board from "./Board";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);
  const [currentMove, setCurrentMove] = useState(0);
  let currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    let nextHistory = [...history.slice(0,currentMove + 1), nextSquares];
     setHistory(nextHistory);
    setXIsNext(!xIsNext);
    setCurrentMove(nextHistory.length - 1);
  }

  function jampTo(nextMove) {
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) description = "Go to move #" + move;
    else description = "Go to game start";

    return (
        <li key={move}>
          <button className="border-2 p-1" onClick={() => jampTo(move)} >
            {description}
          </button>
        </li>
    );
  });

  return (
    <div className="flex gap-3 ">
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />

      <ol className="mt-13">
        {moves}
      </ol>
    </div>
  );
}
