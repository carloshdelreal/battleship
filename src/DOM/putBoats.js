const shipLength = {
  battleship: 4,
  submarine: 3,
  carrier: 5,
  cruiser: 3,
  patrolBoat: 2,
};

function placeShipHorizontally(x, y, l, shipType) {
  const a = document.querySelector('.grid');
  const items = a.children[y];
  let count = 1;
  for (let i = x; i < x + l; i += 1) {
    const item = items.children[i];
    item.classList.add('ship-sea');
    item.classList.add(`${shipType}-sea`);
    item.classList.add(`${shipType}-sea-${count}`);
    count += 1;
  }
}

function placeShipVertically(x, y, l, shipType) {
  const a = document.querySelector('.grid');
  let count = 1;
  for (let i = y; i < y + l; i += 1) {
    const items = a.children[i];
    const item = items.children[x];
    item.classList.add('ship-sea-v');
    item.classList.add(`${shipType}-sea-v`);
    item.classList.add(`${shipType}-sea-v-${count}`);
    count += 1;
  }
}

// const [X, Y, shipType, direction] = positionSeed;
// [5, 0, "battleship", "v"]

function placeShip(x, y, shipType, direction) {
  if (direction === 'h') {
    placeShipHorizontally(x, y, shipLength[shipType], shipType);
  }
  if (direction === 'v') {
    placeShipVertically(x, y, shipLength[shipType], shipType);
  }
}

function placeShips(positionSeed) {
  positionSeed.forEach((element) => {
    const [x, y, shipType, direction] = element;
    placeShip(x, y, shipType, direction);
  });
}

export default placeShips;
