function arrEqual(a, b) {
  // if length is not equal
  if (a.length != b.length) return false;
  else {
    // comapring each element of array
    for (let i = 0; i < a.length; i += 1) if (a[i] != b[i]) return false;
    return true;
  }
}

function arrInclude(arr, arrIncluded) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arrEqual(arr[i], arrIncluded)) {
      return true;
    }
  }
  return false;
}

export { arrEqual, arrInclude };
