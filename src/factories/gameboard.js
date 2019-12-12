import Ship from './ship';
import { randomShip } from '../auxFunctions';

const GameBoard = (testing) => {
  const ship = {
    battleship: Ship('battleship'),
    submarine: Ship('submarine'),
    carrier: Ship('carrier'),
    cruiser: Ship('cruiser'),
    patrolBoat: Ship('patrolBoat'),
  };

  let positions = {};
  const positionCoordinates = [];
  const seeds = [];
  let attacks = {
    mis: [],
    hit: [],
  };

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

  const missedAttacks = () => attacks.mis;

  const allSunk = () => {
    const types = Object.keys(ship);
    for (let i = 0; types.length > i; i += 1) {
      if (ship[types[i]].isSunk() === false) {
        return false;
      }
    }
    return true;
  };

  function createShipCoords(shipType, x, y, direction) {
    const { length } = ship[shipType];
    const coords = [];
    if (direction === 'v') {
      for (let i = 0; length > i; i += 1) {
        if (x >= 10 || y + i >= 10) {
          return null;
        }
        if (positions[x] != null && positions[x][y + i] != null) {
          return null;
        }
        coords.push({ x, y: y + i });
      }
      return coords;
    }
    if (direction === 'h') {
      for (let i = 0; length > i; i += 1) {
        if (x + i >= 10 || y >= 10) {
          return null;
        }
        if (positions[x + i] != null && positions[x + i][y] != null) {
          return null;
        }
        coords.push({ x: x + i, y });
      }
      return coords;
    }
    return null;
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

  function createPositions() {
    const types = Object.keys(ship);
    for (let i = 0; types.length > i; i += 1) {
      let returned = null;
      let coordinates = null;
      let seed = null;
      do {
        const { X, Y, directionStr } = randomShip();
        // console.log(`x: ${X}, y:${Y}, direction: ${directionStr}`);
        seed = [X, Y, types[i], directionStr];
        coordinates = createShipCoords(types[i], X, Y, directionStr);
        returned = setPosition(types[i], coordinates);
        // console.log(`Returned: ${returned}`);
      } while (returned !== 1);
      positionCoordinates.push(...coordinates);
      seeds.push(seed);
    }
  }

  if (testing) {
    setPosition('battleship', createShipCoords('battleship', 0, 0, 'v'));
    setPosition('submarine', createShipCoords('submarine', 1, 0, 'h'));
    setPosition('carrier', createShipCoords('carrier', 0, 0, 'h'));
  } else {
    createPositions();
  }

  const reset = () => {
    positions = {};
    positionCoordinates.length = 0;
    seeds.length = 0;
    attacks = {
      mis: [],
      hit: [],
    };
    createPositions();

    const types = Object.keys(ship);
    for (let i = 0; types.length > i; i += 1) {
      ship[types[i]].reset();
    }
  };

  return {
    positions,
    ship,
    positionCoordinates,
    seeds,
    receiveAttack,
    missedAttacks,
    allSunk,
    reset,
  };
};

export default GameBoard;
