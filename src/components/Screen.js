import Score from "./Score";

import {
  getFormatedScore,
  sortScore,
  mergeScores,
  calculateScore,
  createScore,
} from "../stores/reducers";

const Screen = ({
  playBtn,
  startRaceBtn,
  currentStageTitle,
  totalStageTitle,
  currentStage,
  currentScore,
  totalScore,
  setCurrentScore,
  setCurrentStage,
  setTotalScore,
  INITIAL_STATE,
  TOTAL_STATE,
}) => {
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
    setCurrentStage(INITIAL_STATE);
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
