import Team from "../components/Team";

import { calculateFormatedDate, sortScore } from "../stores/reducers";

const TeamPage = (props) => {
  const addToTeam = (team, setTeam, toTeam, setToTeam, c) => {
    if (
      team.totalScore.length < 9 &&
      !team.totalScore.find((cc) => cc.number === c.number)
    ) {
      setTeam({
        ...team,
        totalScore: [...team.totalScore, c],
      });

      setToTeam(toTeam.filter((cc) => cc.number !== c.number));
    }
  };

  const removeFromTeam = (fromTeam, setFromTeam, toTeam, setToTeam, c) => {
    if (fromTeam.totalScore.find((cc) => cc.number === c.number)) {
      setFromTeam({
        ...fromTeam,
        totalScore: fromTeam.totalScore.filter((cc) => cc.number !== c.number),
      });

      setToTeam([...toTeam, c]);
    }
  };

  return (
    <div className="container ">
      <div className="row">
        <div className="col">
          <Team
            title="Sergio Team"
            players={props.sergioTeam.totalScore.map((c) => ({
              ...c,
              time: calculateFormatedDate(
                sortScore,
                props.totalScore
              )(props.totalScore.find((cc) => cc.number === c.number).time),
              removePlayer: () =>
                removeFromTeam(
                  props.sergioTeam,
                  props.setSergioTeam,
                  props.freeTeam,
                  props.setFreeTeam,
                  c
                ),
            }))}
          />
        </div>
        <div className="col">
          <Team
            title="Papi Team"
            players={props.papiTeam.totalScore.map((c) => ({
              ...c,
              time: calculateFormatedDate(
                sortScore,
                props.totalScore
              )(props.totalScore.find((cc) => cc.number === c.number).time),
              removePlayer: () =>
                removeFromTeam(
                  props.papiTeam,
                  props.setPapiTeam,
                  props.freeTeam,
                  props.setFreeTeam,
                  c
                ),
            }))}
          />
        </div>
      </div>
      <div className="row"></div>
      <div className="row">
        <Team
          title="Corredores Sin Equipo"
          players={props.freeTeam.map((c) => ({
            ...c,
            addToSergioTeam: () =>
              addToTeam(
                props.sergioTeam,
                props.setSergioTeam,
                props.freeTeam,
                props.setFreeTeam,
                c
              ),
            addToPapiTeam: () =>
              addToTeam(
                props.papiTeam,
                props.setPapiTeam,
                props.freeTeam,
                props.setFreeTeam,
                c
              ),
          }))}
        />
      </div>
    </div>
  );
};

export default TeamPage;
