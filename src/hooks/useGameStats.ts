import { useState, useEffect, useRef } from "react";
import { StatsByMode, GameMode } from "../types";

const defaultStats: StatsByMode = {
  1: { wins: 0, losses: 0 },
  2: { wins: 0, losses: 0 },
  3: { wins: 0, losses: 0 },
};

const safeGetFromStorage = (key: string): StatsByMode => {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultStats;
  } catch {
    return defaultStats; // fallback to memory
  }
};

const safeSetToStorage = (key: string, value: StatsByMode) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // ignore if unavailable (memory-only fallback)
    console.log("There are no current stats available");
  }
};

export const useGameStats = () => {
  const memoryFallback = useRef<StatsByMode>(defaultStats);
  const [stats, setStats] = useState<StatsByMode>(() => {
    return safeGetFromStorage("rps-stats");
  });

  useEffect(() => {
    safeSetToStorage("rps-stats", stats);
    memoryFallback.current = stats;
  }, [stats]);

  const recordResult = (mode: GameMode, isWin: boolean) => {
    setStats((prev) => {
      const updated = {
        ...prev,
        [mode]: {
          wins: prev[mode].wins + (isWin ? 1 : 0),
          losses: prev[mode].losses + (isWin ? 0 : 1),
        },
      };
      return updated;
    });
  };

  return { stats, recordResult };
};
