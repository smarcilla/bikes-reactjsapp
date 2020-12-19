import { useState } from "react";

import {
  getFormatedScore,
  sortScore,
  mergeScores,
  calculateScore,
  createScore,
} from "./stores/reducers";

const Screen = () => {
  const [currentScore, setCurrentScore] = useState(createScore());
  const [totalScore, setTotalScore] = useState(createScore());

  const playAction = () => {
    const cs = calculateScore(currentScore);
    setCurrentScore(cs);
    setTotalScore(mergeScores(totalScore, cs));
  };

  const 
};
