import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

import Routes from "./routes";
import Nav from "./components/Nav";

const tabItems = [
  { id: "nav-play-tab", contentId: "nav-play", label: "Jugar", href: "/" },
  {
    id: "nav-teams-tab",
    contentId: "nav-teams",
    label: "Equipos",
    href: "/teams",
  },
];

function App() {
  const [navSelected, setNavSelect] = useState(tabItems[0].id);

  console.info(navSelected);

  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <h1>Tour de Francia 2020.</h1>
          <Nav {...{ navSelected, setNavSelect, tabItems }} />
        </header>

        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
