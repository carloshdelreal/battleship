import Ship from './ship';

const GameBoard = (testing) => {
  const ship = {
    battleship: Ship('battleship'),
    submarine: Ship('submarine'),
    carrier: Ship('carrier'),
    cruiser: Ship('cruiser'),
    patrolBoat: Ship('patrolBoat'),
  };

  const positions = {};
  const positionCoordinates = [];
  const attacks = {
    mis: [],
    hit: [],
  };

  if (testing) {
    setPosition('battleship', createShipCoords('battleship', 0, 0, 'v'));
    setPosition('submarine', createShipCoords('submarine', 1, 0, 'h'));
    setPosition('carrier'), createShipCoords('carrier', 0, 0, 'h');
  } else {
    createPositions();
  }

  const receiveAttack = (x, y) => {
    if (positions[x] == null || positions[x][y] == null) {
      attacks.mis.push([x, y]);
      return false;
    }
    const hitted = positions[x][y];
    attacks.hit.push([x, y]);
    ship[hitted.shipType].hit(hitted.index);
    return true;
  };

  const missedAttacks = () => {
    return attacks.mis;
  };

  const allSunk = () => {
    const types = Object.keys(ship);
    for (let i = 0; types.length > i; i += 1) {
      if (ship[types[i]].isSunk() == false) {
        return false;
      }
    }
    return true;
  };

  function createPositions() {
    const types = Object.keys(ship);
    let returned = null;
    for (let i = 0; types.length > i; i += 1) {
      do {
        const { X, Y, directionStr } = randomShip();
        // console.log(`x: ${X}, y:${Y}, direction: ${directionStr}`);
        const coordinates = createShipCoords(types[i], X, Y, directionStr);
        returned = setPosition(types[i], coordinates);
        // console.log(`Returned: ${returned}`);
        if (returned != null) {
          positionCoordinates.push(...coordinates);
        }
      } while (returned == null);
    }
  }

  function setPosition(shipToSet, coords) {
    if (coords == null) return null;
    for (let i = 0; coords.length > i; i += 1) {
      if (positions[coords[i].x] == null) {
        positions[coords[i].x] = {};
      }
      const location = { shipType: shipToSet, index: i };
      positions[coords[i].x][coords[i].y] = location;
    }
    return 1;
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
        } else if (positions[x + i] != null && positions[x + i][y] != null) {
          return null;
        }
        coords.push({ x: x + i, y: y });
      }
      return coords;
    }
  }

  return {
    positions,
    ship,
    positionCoordinates,
    receiveAttack,
    missedAttacks,
    allSunk,
  };
};

const randomShip = () => {
  const direction = ['v', 'h'];
  const X = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
  const Y = Math.floor(Math.random() * (10 - 0 + 1)) + 0;

  const directionStr = direction[Math.floor(Math.random() * (1 - 0 + 1)) + 0];

  return { X, Y, directionStr };
};

export default GameBoard;
