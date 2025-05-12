export type Choice = "rock" | "paper" | "scissors";
export type GameMode = 1 | 2 | 3;

export interface GameState {
  playerScore: number;
  computerScore: number;
  roundsToWin: number;
  currentRound: number;
}

export interface GameStats {
  wins: number;
  losses: number;
}

export type StatsByMode = {
  [mode in GameMode]: GameStats;
};
