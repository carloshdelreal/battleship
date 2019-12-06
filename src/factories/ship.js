const Ship = (shipType) => {
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
    patrolBoat: {
      length: 2,
    },
  };

  const { length } = shipClasses[shipType];
  let damage = Array(length).fill(false);
  const isSunk = () => {
    return damage.every((x) => x == true);
  };

  const hit = (number) => {
    damage[number] = true;
  };

  return {
    length,
    damage,
    hit,
    isSunk,
  };
};

export default Ship;
