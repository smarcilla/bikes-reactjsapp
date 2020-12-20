import { useState } from "react";

import Score from "./Score";

import {
  getFormatedScore,
  sortScore,
  mergeScores,
  calculateScore,
  createScore,
} from "../stores/reducers";

const INITIAL_STATE = 0;
const TOTAL_STATE = 21;

const Screen = ({
  playBtn,
  startRaceBtn,
  currentStageTitle,
  totalStageTitle,
}) => {
  const [currentScore, setCurrentScore] = useState(createScore());
  const [totalScore, setTotalScore] = useState(createScore());
  const [currentStage, setCurrentStage] = useState(INITIAL_STATE);

  const playAction = () => {
    if (currentStage < TOTAL_STATE) {
      const cs = calculateScore(currentScore);
      setCurrentScore(cs);
      setTotalScore(mergeScores(totalScore, cs));
      setCurrentStage(currentStage + 1);
    }
  };

  const startRaceAction = () => {
    setCurrentScore(createScore());
    setTotalScore(createScore());
    setCurrentStage(1);
  };

  return (
    <div className="container bg-dark">
      <div className="row">
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => playAction()}
          >
            {playBtn}
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => startRaceAction()}
          >
            {startRaceBtn}
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Score
            title={`${currentStageTitle} ${currentStage}`}
            data={getFormatedScore(sortScore)(currentScore)}
          />
        </div>
        <div className="col">
          <Score
            title={`${totalStageTitle}`}
            data={getFormatedScore(sortScore)(totalScore)}
          />
        </div>
      </div>
    </div>
  );
};

export default Screen;
