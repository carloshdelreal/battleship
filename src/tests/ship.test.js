import Ship from '../factories/ship';

test('Create a new battleship and check parameters', () => {
  const ship = new Ship('battleship');
  expect(ship.length).toBe(4);
  expect(ship.damage).toEqual([false, false, false, false]);
  expect(ship.isSunk()).toBe(false);
});

test('Create a new carrier and check parameters ', () => {
  const ship = new Ship('carrier');
  expect(ship.length).toBe(5);
  expect(ship.damage).toEqual([false, false, false, false, false]);
  expect(ship.isSunk()).toBe(false);
});
