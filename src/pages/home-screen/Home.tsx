import "./home.scss";

export default function Home() {
  return (
    <div className="home-page">
      <h1 className="title">Welcome to the Rock Paper Scissors</h1>
      <p className="description">
        Rock, Paper, and Scissors is a classic hand game usually played between
        two people. Each player simultaneously forms one of three shapes with
        their hand:
      </p>
      <ul className="rules">
        <li>Rock (a closed fist)</li>
        <li>Paper (an open hand)</li>
        <li>
          Scissors (a fist with the index and middle fingers extended, forming a
          V)
        </li>
      </ul>
      <p className="description">
        It's often used as a quick decision-making game, similar to flipping a
        coin.
      </p>
    </div>
  );
}
