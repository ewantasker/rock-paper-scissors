import { useState } from "react";
import Modal from "../../components/pop-up-modal/Modal";
import "./help.scss";

export default function Help() {
  const [openPlay, setPlayOpen] = useState<boolean>(false);
  const [openStats, setStatsOpen] = useState<boolean>(false);
  return (
    <>
      <div className="help-container">
        <h1 className="title has-text-centered">What can we help you with?</h1>
        <button className="help-btn" onClick={() => setPlayOpen(true)}>
          How To Play?
        </button>
        <button className="help-btn" onClick={() => setStatsOpen(true)}>
          How To View Your Game Stats?
        </button>
      </div>
      <Modal isOpen={openPlay} onClose={() => setPlayOpen(false)}>
        <h2 className="title">How To Play?</h2>
        <ol>
          <li>
            <span className="text-bold">Choose Your Move:</span> Select either
            Rock, Paper, or Scissors by clicking the corresponding button.
          </li>
          <li>
            <span className="text-bold">Wait for the Result:</span> The computer
            will randomly choose its move.
          </li>
          <div>
            <p>
              <span className="text-bold">See Who Wins:</span> The winner is
              decided based on these rules:
            </p>
            - Rock crushes Scissors - Scissors cuts Paper - Paper covers Rock
          </div>
          <li>
            <span className="text-bold">Play Again:</span> You can keep playing
            as many rounds as you like!
          </li>
        </ol>
      </Modal>
      <Modal isOpen={openStats} onClose={() => setStatsOpen(false)}>
        <h2 className="title">How To View Your Game Stats?</h2>
        <p>
          <ol>
            <li>
              Go to the Stats Section: Look for a “Stats” or “My Stats” button
              or tab in the game interface.
            </li>
            <li>Check Your Records:</li>- Total games played - Wins, losses, and
            ties - Win percentage
            <li>
              {" "}
              Track Your Progress: Stats update automatically after each round,
              helping you keep track of your performance over time.
            </li>
          </ol>
        </p>
      </Modal>
    </>
  );
}
