import { arrEqual, arrInclude } from '../auxFunctions';

test('arrComp([1,2], [1,2]) return true', () => {
  const arr1 = [1, 2];
  const arr2 = [1, 2];
  expect(arrEqual(arr1, arr2)).toBe(true);
});

test('arrComp([2,2], [1,2]) return false', () => {
  const arr1 = [2, 2];
  const arr2 = [1, 2];
  expect(arrEqual(arr1, arr2)).toBe(false);
});

test('arrComp([1,2,3], [1,2]) return false', () => {
  const arr1 = [1, 2, 3];
  const arr2 = [1, 2];
  expect(arrEqual(arr1, arr2)).toBe(false);
});

test('arrInclude([[1,3], [1,2] ][1,2])', () => {
  const arr = [
    [1, 3],
    [1, 2],
  ];
  const arrIncluded = [1, 2];
  expect(arrInclude(arr, arrIncluded)).toBe(true);
});

test('arrInclude([[1,3], [1,2] ][2,2])', () => {
  const arr = [
    [1, 3],
    [1, 2],
  ];
  const arrIncluded = [2, 2];
  expect(arrInclude(arr, arrIncluded)).toBe(false);
});
