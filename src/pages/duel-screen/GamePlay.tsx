import { useState } from "react";
import { Choice } from "../../types";

const choices: Choice[] = ["rock", "paper", "scissors"];

interface Props {
  roundsToWin: number;
  onGameEnd: (winner: string) => void;
}

interface PlayersMove {
  human: string;
  computer: string;
}

export default function GamePlay({ roundsToWin, onGameEnd }: Props) {
  const [playerScore, setPlayerScore] = useState<number>(0);
  const [computerScore, setComputerScore] = useState<number>(0);
  const [roundResult, setRoundResult] = useState<string>("");

  const [moves, setMoves] = useState<PlayersMove>({
    human: "",
    computer: "",
  });

  const getComputerChoice = (): Choice => {
    const index = Math.floor(Math.random() * 3);
    return choices[index];
  };

  const playRound = (playerChoice: Choice) => {
    const computerChoice = getComputerChoice();
    if (playerChoice === computerChoice) {
      setRoundResult("It's a tie!");
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      const newScore = playerScore + 1;
      setPlayerScore(newScore);
      setRoundResult("You win this round!");
      if (newScore === roundsToWin) onGameEnd("Player");
    } else {
      const newScore = computerScore + 1;
      setComputerScore(newScore);
      setRoundResult("Computer wins this round!");
      if (newScore === roundsToWin) onGameEnd("Computer");
    }
    setMoves({ human: playerChoice, computer: computerChoice });
  };

  return (
    <div className="box has-text-centered">
      <h2 className="subtitle">Make your choice</h2>
      <div className="buttons is-centered">
        {choices.map((choice) => (
          <button
            key={choice}
            className="button is-light"
            onClick={() => playRound(choice)}
          >
            {choice}
          </button>
        ))}
      </div>
      <div>
        <h1>Result</h1>
        <p className="mt-4">{roundResult}</p>
        <p>Player played: {moves.human}</p>
        <p>Computer played: {moves.computer}</p>
      </div>
      <div>
        <p className="mt-2">
          Player: {playerScore} | Computer: {computerScore}
        </p>
      </div>
    </div>
  );
}
