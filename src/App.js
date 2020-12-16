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
  <>
    <p>{title}</p>
    <ul>
      {data.map((d, index) => (
        <li key={index}>{`${d.name} ${d.number} ${d.time}`}</li>
      ))}
    </ul>
  </>
);

function App() {
  const [currentScore, setCurrentScore] = useState(createScore());
  const [totalScore, setTotalScore] = useState(createScore());

  return (
    <div className="App">
      <header className="App-header">
        <p>Tour de Francia 2020.</p>

        <div className="container">
          <div className="row">
            <button
              onClick={() => {
                console.info(`Dentro`);
                const cs = calculateScore(currentScore);
                setCurrentScore(cs);
                setTotalScore(mergeScores(totalScore, cs));
              }}
            >
              Jugar
            </button>
          </div>
          <div className="row">
            <div className="col">
              <Score
                title="Clasificacion Etapa"
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
