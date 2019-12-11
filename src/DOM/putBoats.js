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

function placeShipVertically(x, y, l, shipType) {
  const a = document.querySelector('.grid');

  let count = 1;
  for (let i = x; i < x + l; i += 1) {
    let items = a.children[i];
    const item = items.children[y];
    item.classList.add('ship-sea-v');
    item.classList.add(`${shipType}-sea-v`);
    item.classList.add(`${shipType}-sea-v-${count}`);
    count += 1;
  }
}
