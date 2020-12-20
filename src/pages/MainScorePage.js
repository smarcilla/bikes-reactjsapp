import Screen from "../components/Screen";

const pageProps = {
  playBtn: "Jugar",
  startRaceBtn: "Empezar Carrera",
  currentStageTitle: "Clasificacion Etapa",
  totalStageTitle: "Clasificacion General ",
};

const MainScorePage = () => <Screen {...pageProps} />;

export default MainScorePage;
