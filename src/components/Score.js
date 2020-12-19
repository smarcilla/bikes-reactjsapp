const NAME_CYCLIST = "ciclista";
const NUMBER_CYCLIST = "Numero";
const TIME_CYCLIST = "Tiempo";

const Score = ({ title, data }) => (
  <div className="table table-bordered table-dark">
    <h3>{title}</h3>
    <div className="row">
      <div className="col-6">{NAME_CYCLIST}</div>
      <div className="col-2">{NUMBER_CYCLIST}</div>
      <div className="col-3">{TIME_CYCLIST}</div>
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

export default Score;
