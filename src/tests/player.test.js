import Player from '../factories/player';

test('Generate 40 random shots', () => {
  const player = Player('Tester', true);
  for (let i = 0; i < 40; i += 1) {
    player.shot();
  }
  expect(player.shots.length).toBe(40);
});

test('check player gameboard', () => {
  const player = Player('tester');
  expect(player).not.toBe(null);
  expect(player.gameBoard.ship.battleship.length).toBe(4);
  expect(Object.keys(player.gameBoard.ship).length).toBe(5);
});

test('reset player', () => {
  const player = Player('tester');
  player.reset();
  expect(player.shots).toEqual([]);
});

test('player keeps track of the shots', () => {
  const player = Player('tester');
  player.shot(0, 0);
  player.shot(3, 0);
  expect(player.shots).toEqual([
    [0, 0],
    [3, 0],
  ]);
});
