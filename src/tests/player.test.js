import Player from '../factories/player';

test('Generate 40 random shots', () => {
  const player = new Player(true);

  for (let i = 0; i < 40; i += 1) {
    player.shot();
  }

  expect(player.shots.length).toBe(40);
});
