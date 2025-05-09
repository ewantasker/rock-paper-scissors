import { useState } from "react";
import Modal from "../../components/Modal";
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
        <h2>How To Play</h2>
        <p>Instructions go here...</p>
      </Modal>
      <Modal isOpen={openStats} onClose={() => setStatsOpen(false)}>
        <h2>How To View Your Game Stats?</h2>
        <p>Instructions go here...</p>
      </Modal>
    </>
  );
}
