const Ship = (ship_type) => {
  const shipClasses = {
    battleship: {
      length: 4,
    },
    submarine: {
      length: 3,
    },
    carrier: {
      length: 5,
    },
    cruiser: {
      length: 3,
    },
    PatrolBoat: {
      length: 2,
    },
  };

  const { length } = shipClasses[ship_type];

  let ship_damage = new Array(length).fill(false);

  const hit = () => {
    ship_damage += 1;
  };

  const isSunk = () => ship_damage === length;
  return { length };
};

export default Ship;
