import React from "react";

const NAME_CYCLIST = "Ciclista";
const NUMBER_CYCLIST = "Numero";
const TIME_CYCLIST = "Tiempo";

const formatTotalTime = (time) => {
  const d = new Date(0);
  d.setSeconds(time - 60 * 60);

  return d.toLocaleTimeString();
};

const Team = (props) => {
  return (
    <>
      <h3>{props.title}</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">{NAME_CYCLIST}</th>
            <th scope="col">{NUMBER_CYCLIST}</th>
            <th scope="col">{TIME_CYCLIST}</th>
            <th scope="col">#</th>
            <th scope="col">#</th>
          </tr>
        </thead>
        <tbody>
          {props.players.map((c, index) => (
            <tr key={index}>
              <td></td>
              <td>{c.name}</td>
              <td>{c.number}</td>
              <td>{c.time ? c.time.formated : ""}</td>
              <td onClick={() => c.addToSergioTeam && c.addToSergioTeam()}>
                {c.addToSergioTeam && "Compra Sergio"}
              </td>
              <td
                onClick={() =>
                  c.removePlayer
                    ? c.removePlayer()
                    : c.addToPapiTeam
                    ? c.addToPapiTeam()
                    : null
                }
              >
                {c.removePlayer
                  ? "Vender"
                  : c.addToPapiTeam
                  ? "Compra Papi"
                  : ""}
              </td>
            </tr>
          ))}

          <tr>
            <td></td>
            <td>Total: </td>
            <td></td>
            <td>
              {formatTotalTime(
                props.players.reduce((acc, p) => {
                  return acc + (p.time ? p.time.time : 0);
                }, 0)
              )}
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Team;
