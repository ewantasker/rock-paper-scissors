interface Props {
  onStart: (roundsToWin: number) => void;
}

export default function GameSetup({ onStart }: Props) {
  return (
    <div className="box has-text-centered">
      <h1 className="title">Choose Game Mode</h1>
      <div className="buttons is-centered">
        <button className="button is-primary" onClick={() => onStart(1)}>
          Best of 1
        </button>
        <button className="button is-info" onClick={() => onStart(2)}>
          Best of 3
        </button>
        <button className="button is-link" onClick={() => onStart(3)}>
          Best of 5
        </button>
      </div>
    </div>
  );
}
