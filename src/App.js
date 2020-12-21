import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

import Routes from "./routes";
import Nav from "./components/Nav";

import { createScore, getPlayers } from "./stores/reducers";

const tabItems = [
  { id: "nav-play-tab", contentId: "nav-play", label: "Jugar", href: "/" },
  {
    id: "nav-teams-tab",
    contentId: "nav-teams",
    label: "Equipos",
    href: "/teams",
  },
];

const INITIAL_STATE = 0;
const TOTAL_STATE = 21;

function App() {
  const [navSelected, setNavSelect] = useState(tabItems[0].id);
  const [currentScore, setCurrentScore] = useState(createScore());
  const [totalScore, setTotalScore] = useState(createScore());
  const [currentStage, setCurrentStage] = useState(INITIAL_STATE);

  const [sergioTeam, setSergioTeam] = useState({
    currentScore: [],
    totalScore: [],
  });
  const [papiTeam, setPapiTeam] = useState({
    currentScore: [],
    totalScore: [],
  });

  const [freeTeam, setFreeTeam] = useState(getPlayers());

  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <h1>Tour de Francia 2020.</h1>
          <Nav {...{ navSelected, setNavSelect, tabItems }} />
        </header>

        <Routes
          {...{
            currentScore,
            setCurrentScore,
            totalScore,
            setTotalScore,
            currentStage,
            setCurrentStage,
            INITIAL_STATE,
            TOTAL_STATE,
            sergioTeam,
            setSergioTeam,
            papiTeam,
            setPapiTeam,
            freeTeam,
            setFreeTeam,
          }}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
