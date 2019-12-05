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

test('Takes a number and marks the position as hit', () => {
  const ship = new Ship('carrier');
  const number = 0;
  ship.hit(number);
  expect(ship.damage[number]).toBe(true);
});

test('Create a new carrier and sink it! ', () => {
  const ship = new Ship('carrier');
  ship.hit(0);
  ship.hit(1);
  ship.hit(2);
  ship.hit(3);
  ship.hit(4);
  expect(ship.isSunk()).toBe(true);
});
