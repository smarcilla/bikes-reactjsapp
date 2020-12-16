import { useState } from "react";
import "./App.css";

import {
  getFormatedScore,
  sortScore,
  mergeScores,
  calculateScore,
  createScore,
} from "./stores/reducers";

const Score = ({ title, data }) => (
  <div className="table table-bordered table-dark">
    <h3>{title}</h3>
    <div className="row">
      <div className="col-6">Ciclista</div>
      <div className="col-2">Numero</div>
      <div className="col-3">Tiempo</div>
    </div>
    {data.map((d, index) => (
      <div className="row">
        <div key={index} className="col-6">
          {d.name}
        </div>
        <div key={index} className="col-2">
          {d.number}
        </div>
        <div key={index} className="col-3">
          {d.time}
        </div>
      </div>
    ))}
  </div>
);

function App() {
  const totalStage = 21;
  const [currentScore, setCurrentScore] = useState(createScore());
  const [totalScore, setTotalScore] = useState(createScore());
  const [currentStage, setCurrentStage] = useState(1);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tour de Francia 2020.</h1>

        <div className="container">
          <div className="row">
            <div class="btn-group" role="group" aria-label="Basic example">
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => {
                  if (currentStage < totalStage) {
                    const cs = calculateScore(currentScore);
                    setCurrentScore(cs);
                    setTotalScore(mergeScores(totalScore, cs));
                    setCurrentStage(currentStage + 1);
                  }
                }}
              >
                Jugar
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => {
                  setCurrentScore(createScore());
                  setTotalScore(createScore());
                  setCurrentStage(1);
                }}
              >
                Empezar Tour
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Score
                title={`Clasificacion Etapa ${currentStage}`}
                data={getFormatedScore(sortScore)(currentScore)}
              />
            </div>
            <div className="col">
              <Score
                title="Clasificacion General"
                data={getFormatedScore(sortScore)(totalScore)}
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
