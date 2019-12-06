import GameBoard from '../factories/gameboard';

test('Set Carrier position Horizontal on 0,0', () => {
  const gameBoard = new GameBoard();
  expect(gameBoard.ship.battleship.isSunk()).toBe(false);
});

test('set battleship position 0,0 vertical', () => {
  const gameBoard = new GameBoard();
  const expected = {
    0: {
      0: { battleship: 0 },
      1: { battleship: 1 },
      2: { battleship: 2 },
      3: { battleship: 3 },
    },
  };
  expect(gameBoard.positions).toEqual(expected);
});
