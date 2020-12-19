import "./App.css";

import Screen from "./components/Screen";

const configProps = {
  playBtn: "Jugar",
  startRaceBtn: "Empezar Carrera",
  currentStageTitle: "Clasificacion Etapa",
  totalStageTitle: "Clasificacion General ",
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tour de Francia 2020.</h1>
      </header>
      <Screen {...configProps} />
    </div>
  );
}

export default App;
