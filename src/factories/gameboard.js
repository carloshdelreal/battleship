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

  function createPositions() {}
  setPosition('battleship', createShipCoords('battleship', 0, 0, 'v'));
  setPosition('submarine', createShipCoords('submarine', 1, 0, 'h'));
  setPosition('carrier'), createShipCoords('carrier', 0, 0, 'h');

  function setPosition(shipToSet, coords) {
    if (coords == null) return null;
    for (let i = 0; coords.length > i; i += 1) {
      if (positions[coords[i].x] == null) {
        positions[coords[i].x] = {};
      }
      const location = {};
      location[shipToSet] = i;
      positions[coords[i].x][coords[i].y] = location;
    }
  }

  function createShipCoords(shipType, x, y, direction) {
    const { length } = ship[shipType];
    let coords = [];
    if (direction == 'v') {
      for (let i = 0; length > i; i += 1) {
        if (x >= 10 || y + i >= 10) {
          return null;
        } else if (positions[x] != null && positions[x][y + i] != null) {
          return null;
        }
        coords.push({ x: x, y: y + i });
      }
      return coords;
    } else if (direction == 'h') {
      for (let i = 0; length > i; i += 1) {
        if (x + i >= 10 || y >= 10) {
          return null;
        } else if (positions[x] != null && positions[x + i][y] != null) {
          return null;
        }
        coords.push({ x: x + i, y: y });
      }
      return coords;
    }
  }

  return { positions, ship };
};

const randomShip = () => {
  const direction = ['v', 'h'];
  const randomX = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
  const randomY = Math.floor(Math.random() * (10 - 0 + 1)) + 0;

  const randomdirection =
    direction[Math.floor(Math.random() * (1 - 0 + 1)) + 0];

  const directionStr = direction[randomdirection];

  return { randomX, randomY, directionStr };
};

export default GameBoard;
