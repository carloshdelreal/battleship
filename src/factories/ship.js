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
  const type = shipType;
  const { length } = shipClasses[shipType];
  const damage = Array(length).fill(false);

  const isSunk = () => damage.every(x => x === true);

  const hit = (number) => {
    damage[number] = true;
  };

  const reset = () => {
    for (let i = 0; i < length; i += 1) {
      damage[i] = false;
    }
  };

  return {
    length,
    damage,
    hit,
    isSunk,
    type,
    reset,
  };
};

export default Ship;
