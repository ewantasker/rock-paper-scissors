import './home.scss';

export default function Home() {
  return (
    <div className="home-page container mt-5">
      <h1 className="title mt-5">
        Welcome to the Rock Paper Scissors
      </h1>
      <div className="content mt-4">
        <p className="mb-4">
          Rock, Paper, and Scissors is a classic hand game usually played between two people. Each player simultaneously forms one of three shapes with their hand:
        </p>

        <ul className="mb-4">
          <li>Rock (a closed fist)</li>
          <li>Paper (an open hand)</li>
          <li>Scissors (a fist with the index and middle fingers extended, forming a V)</li>
        </ul>

        <p className="mb-4">
          It's often used as a quick decision-making game, similar to flipping a coin.
        </p>
      </div>
    </div>
  );
}