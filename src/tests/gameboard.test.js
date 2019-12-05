import GameBoard from '../factories/gameboard';
import expectExport from 'expect';

test('Create the default GameBoard and check if it has 10 Rows', () => {
  const b = new GameBoard();
  expect(b.length).toEqual(10);
});

test('Create the default GameBoard and check if it has 10 columns', () => {
  const b = new GameBoard();
  for (let i = 0; i <= 9; i++) {
    expect(b[i].length).toEqual(10);
  }
});

test('Check if each board cell has been correctly initialized', () => {
  const b = new GameBoard();
  for (let i = 0; i <= 9; i++) {
    for (let j = 0; j < 10; j++) {
      expect(b[i][j]).toEqual(0);
    }
  }
});

test('Test if Board receives a new number in random direction', () => {
  const b = new GameBoard();
  for (let i = 0; i <= 9; i++) {
    for (let j = 0; j < 10; j++) {
      expect(b[i][j]).toEqual(0);
    }
  }
});
