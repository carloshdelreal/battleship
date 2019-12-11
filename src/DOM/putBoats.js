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

const a = document.querySelector('.grid');
let item = a.children[2].children[5];
item.classList.add('ship-sea-v');
item.classList.add(`battleship-sea-v`);
item.classList.add(`battleship-sea-v-1`);
item = a.children[3].children[5];
item.classList.add('ship-sea-v');
item.classList.add(`battleship-sea-v`);
item.classList.add(`battleship-sea-v-2`);
item = a.children[4].children[5];
item.classList.add('ship-sea-v');
item.classList.add(`battleship-sea-v`);
item.classList.add(`battleship-sea-v-3`);
item = a.children[5].children[5];
item.classList.add('ship-sea-v');
item.classList.add(`battleship-sea-v`);
item.classList.add(`battleship-sea-v-4`);
