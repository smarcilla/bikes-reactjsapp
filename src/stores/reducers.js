const getPlayers = () => [
  {
    name: "Seth Kuss",
    number: 12,
    power: 64 * 1000,
  },
  {
    name: "Alejandro Valverde",
    number: 32,
    power: 75 * 1000,
  },
  {
    name: "Marc Soler",
    number: 33,
    power: 73 * 1000,
  },
  {
    name: "Enric Mas",
    number: 31,
    power: 70 * 1000,
  },
  {
    name: "Primoz Roglic",
    number: 11,
    power: 63 * 1000,
  },
  {
    name: "Tajed Pogacar",
    number: 41,
    power: 60 * 1000,
  },
  {
    name: "Chris Froome",
    number: 21,
    power: 62 * 1000,
  },
  {
    name: "Winer Anacona",
    number: 3,

    power: 70 * 1000,
  },
  {
    name: "Nairo Quintana",
    number: 1,
    power: 58 * 1000,
  },
  {
    name: "Warren Barguil",
    number: 2,
    power: 64 * 1000,
  },
  {
    name: "Thibaut Pinot",
    number: 51,
    power: 83 * 1000,
  },
  {
    name: "Julian Alaphilippe",
    number: 61,
    power: 63 * 1000,
  },
  {
    name: "Diego Rosa",
    number: 4,
    totalTime: 0,
    shifts: 0,
    power: 71 * 1000,
  },
  {
    name: "Andrey Amador",
    number: 22,
    power: 89 * 1000,
  },
  {
    name: "Wout van Aert",
    number: 13,
    power: 73 * 1000,
  },
  {
    name: "Mikel Landa",
    number: 71,
    totalTime: 0,
    shifts: 0,
    power: 67 * 1000,
  },
  {
    name: "Aleksandr Vlasov",
    number: 82,
    power: 66 * 1000,
  },
  {
    name: "Tom Dumoulin",
    number: 14,
    power: 65 * 1000,
  },
  {
    name: "Omar Fraile",
    number: 83,
    power: 71 * 1000,
  },
  {
    name: "Jasper Philipsen",
    number: 42,
    power: 71 * 1000,
  },
  {
    name: "Hugh Carthy",
    number: 91,
    power: 64 * 1000,
  },
  {
    name: "Carlos Verona",
    number: 34,
    power: 74 * 1000,
  },
  {
    name: "David de la Cruz",
    number: 43,
    power: 70 * 1000,
  },
  {
    name: "Davide Formolo",
    number: 44,
    power: 70 * 1000,
  },
  {
    name: "Michael Woods",
    number: 92,
    power: 67 * 1000,
  },
  {
    name: "Egan Bernal",
    number: 23,
    power: 63 * 1000,
  },
  {
    name: "Michał Kwiatkowski",
    number: 24,
    power: 68 * 1000,
  },
  {
    name: "Luis felipe martinez",
    number: 93,
    power: 71 * 1000,
  },
  {
    name: "Magnus Cort Nielsen",
    number: 94,
    power: 72 * 1000,
  },
  {
    name: "Miguel Angel Lopez",
    number: 81,
    power: 63 * 1000,
  },
  {
    name: "Miguel Indurain",
    number: 35,
    power: 56 * 1000,
  },
  {
    name: "Perico Delgado",
    number: 36,
    power: 66 * 1000,
  },
  {
    name: "Lance Amstrong",
    number: 84,
    power: 57 * 1000,
  },
  {
    name: "Eddy Merckx",
    number: 62,
    power: 50 * 1000,
  },
  //
];

export const createScore = () => getPlayers().map((p) => ({ ...p, time: 0 }));

export const calculateScore = (score) =>
  score.map((s) => ({ ...s, time: Math.floor(Math.random() * s.power) + 1 }));

export const mergeScores = (totalScore, newScore) =>
  totalScore.reduce(
    (acc, s) => [
      ...acc,
      { ...s, time: s.time + newScore.find((n) => n.number === s.number).time },
    ],
    []
  );

export const sortScore = (score) => score.sort((a, b) => a.time - b.time);

export const getFormatedScore = (fn) => (score) => {
  const sortedScore = fn(score);
  const firstPlayer = sortedScore[0];

  return sortedScore.map((s) => ({
    name: s.name,
    number: s.number,
    time: new Date(s.time - firstPlayer.time).toLocaleTimeString(),
  }));
};
