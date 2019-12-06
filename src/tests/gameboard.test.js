import GameBoard from '../factories/gameboard';

test('Set Carrier position Horizontal on 0,0', () => {
  const gameBoard = new GameBoard();
  expect(gameBoard.ship.battleship.isSunk()).toBe(false);
});

test('set battleship position 0,0 vertical', () => {
  const gameBoard = new GameBoard(true);
  const expected = {
    0: {
      0: { shipType: 'battleship', index: 0 },
      1: { shipType: 'battleship', index: 1 },
      2: { shipType: 'battleship', index: 2 },
      3: { shipType: 'battleship', index: 3 },
    },
    1: {
      0: { shipType: 'submarine', index: 0 },
    },
    2: {
      0: { shipType: 'submarine', index: 1 },
    },
    3: {
      0: { shipType: 'submarine', index: 2 },
    },
  };
  expect(gameBoard.positions).toEqual(expected);
});

test('All the positions correspond to PositionCoordinates', () => {
  const gameBoard = new GameBoard();
  for (let i = 0; gameBoard.positionCoordinates.length > i; i += 1) {
    const { x, y } = gameBoard.positionCoordinates[i];
    expect(gameBoard.positions[x][y]).not.toBe(null);
  }
});

test('hit one ship position', () => {
  const gameBoard = new GameBoard();
  const { x, y } = gameBoard.positionCoordinates[0];
  gameBoard.hit(x, y);
  const hitted = gameBoard.positions[x][y];
  expect(gameBoard.ship[hitted.shipType].damage[hitted.index]).toBe(true);
});

test('Hit all the positions', () => {
  const gameBoard = new GameBoard();
  for (let i = 0; gameBoard.positionCoordinates.length > i; i += 1) {
    const { x, y } = gameBoard.positionCoordinates[i];
    gameBoard.hit(x, y);
  }
  expect(gameBoard.ship.battleship.isSunk()).toBe(true);
});
