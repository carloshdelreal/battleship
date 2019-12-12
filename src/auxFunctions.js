function arrEqual(a, b) {
  // if length is not equal
  if (a.length !== b.length) return false;

  // comapring each element of array
  for (let i = 0; i < a.length; i += 1) if (a[i] !== b[i]) return false;
  return true;
}

function arrInclude(arr, arrIncluded) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arrEqual(arr[i], arrIncluded)) {
      return true;
    }
  }
  return false;
}

const randomShip = () => {
  const direction = ['v', 'h'];
  const X = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
  const Y = Math.floor(Math.random() * (10 - 0 + 1)) + 0;

  const directionStr = direction[Math.floor(Math.random() * (1 - 0 + 1)) + 0];

  return { X, Y, directionStr };
};

function fireBoard(x, y, grid, hit) {
  if (hit) {
    grid.children[y].children[x].classList.add('hitted');
  } else {
    grid.children[y].children[x].classList.add('missed');
  }
}

function resetBoard(grid) {
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const item = grid.children[i].children[j];
      item.className = '';
      item.classList.add('grid-item');
    }
  }
}

export { arrEqual, arrInclude, randomShip, fireBoard, resetBoard };
