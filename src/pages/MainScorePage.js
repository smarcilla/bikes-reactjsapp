import Screen from "../components/Screen";

const pageProps = {
  playBtn: "Jugar",
  startRaceBtn: "Empezar Carrera",
  currentStageTitle: "Clasificacion Etapa",
  totalStageTitle: "Clasificacion General ",
};

const MainScorePage = (props) => <Screen {...{ ...pageProps, ...props }} />;

export default MainScorePage;
