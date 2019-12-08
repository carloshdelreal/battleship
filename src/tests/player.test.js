import Player from '../factories/player';

it('Generate 40 random shots', () => {
  const player = new Player(true);

  for (let i = 0; 40 > i; i += 1) {
    player.shot();
  }

  expect(player.shots.length).toBe(40);
});
