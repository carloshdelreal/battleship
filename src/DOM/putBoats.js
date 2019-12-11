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
