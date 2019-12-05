import Ship from '../factories/ship';

test('Create a new Ship', () => {
  const ship = new Ship('battleship');
  expect(ship.length).toBe(4);
});
