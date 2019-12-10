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

export { arrEqual, arrInclude, randomShip };
