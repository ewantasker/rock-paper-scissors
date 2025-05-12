import { useState } from "react";
import GameSetup from "./GameSetup";
import GamePlay from "./GamePlay";
import Modal from "../../components/pop-up-modal/Modal";
import { useGameStats } from "../../hooks/useGameStats";
import { GameMode } from "../../types";
import "./duel.scss";

export default function Duel() {
  const [roundsToWin, setRoundsToWin] = useState<number | null>(null);
  const [winner, setWinner] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const handleGameStart = (rounds: number) => {
    setRoundsToWin(rounds);
    setWinner(null);
    setModalOpen(false);
  };

  const handleRestart = () => {
    setRoundsToWin(null);
    setWinner(null);
    setModalOpen(false);
  };

  const { recordResult } = useGameStats();

  const handleGameEnd = (winner: string) => {
    setWinner(winner);
    setModalOpen(true);

    const mode = roundsToWin as GameMode;
    const isWin = winner === "Player";
    recordResult(mode, isWin);
  };

  return (
    <div className="container has-text-centered">
      {!roundsToWin ? (
        <GameSetup onStart={handleGameStart} />
      ) : (
        <GamePlay roundsToWin={roundsToWin} onGameEnd={handleGameEnd} />
      )}
      <Modal isOpen={modalOpen} title="Game Over" onClose={handleRestart}>
        <div className="content">
          <h2 className="title is-4">{winner} wins the game!</h2>
          <button className="button is-primary mt-3" onClick={handleRestart}>
            Play Again
          </button>
        </div>
      </Modal>
    </div>
  );
}
