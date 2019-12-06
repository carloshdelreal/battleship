import Ship from './ship';

const GameBoard = () => {
  const ship = {
    battleship: Ship('battleship'),
    submarine: Ship('submarine'),
    carrier: Ship('carrier'),
    cruiser: Ship('cruiser'),
    patrolBoat: Ship('patrolBoat'),
  };
  const positions = {};
  setPosition(
    'battleship',
    createShipCoords({ x: 0, y: 0 }, 'v', ship.battleship.length),
  );

  function setPosition(shipToSet, coords) {
    for (let i = 0; coords.length > i; i += 1) {
      if (positions[coords[i].x] == null) {
        positions[coords[i].x] = {};
      }
      const location = {};
      location[shipToSet] = i;
      positions[coords[i].x][coords[i].y] = location;
    }
  }

  function createShipCoords(startCoords, direction, length) {
    const { x, y } = startCoords;
    let coords = [];
    if (direction == 'v') {
      for (let i = 0; length > i; i += 1) {
        if (x >= 10 || y + i >= 10) {
          return null;
        }
        coords.push({ x: x, y: y + i });
      }
      return coords;
    } else if (direction == 'h') {
      for (let i = 0; length > i; i += 1) {
        if (x + i >= 10 || y >= 10) {
          return null;
        }
        coords.push({ x: x + i, y: y });
      }
      return coords;
    }
  }

  return { positions, ship };
};

const randomShip = (ship) => {
  const direction = ['v', 'h'];
  const randomX = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
  const randomY = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
  const length = ship.length;
  const randomdirection =
    direction[Math.floor(Math.random() * (1 - 0 + 1)) + 0];
  let endCoordinate = 0;
  if (randomdirection == 'v') {
    endCoordinate = randomY + length - 1;
  } else {
    endCoordinate = randomX + length - 1;
  }

  return { randomX, randomY, endCoordinate, randomdirection };
};

export default GameBoard;
