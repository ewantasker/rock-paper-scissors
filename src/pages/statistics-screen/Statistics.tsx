import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
import { useGameStats } from "../../hooks/useGameStats";
import { GameMode } from "../../types/index";
import { colors, gameModes } from "./constants";

const formatData = (wins: number, losses: number) => [
  { name: "Wins", value: wins },
  { name: "Losses", value: losses },
];

export default function Statistics() {
  const { stats } = useGameStats();

  return (
    <div className="container">
      <h1 className="title has-text-centered">Duel Statistics</h1>

      {gameModes.map((mode) => (
        <div key={mode} className="box has-text-centered">
          <h2 className="subtitle">Best of {mode * 2 - 1}</h2>
          <PieChart width={300} height={250}>
            <Pie
              data={formatData(
                stats[mode as GameMode].wins,
                stats[mode as GameMode].losses,
              )}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {colors.map((color, idx) => (
                <Cell key={`cell-${idx}`} fill={color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      ))}
    </div>
  );
}
