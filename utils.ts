export const sum = (a, c) => a + c;

export function* chunks(arr, n) {
  for (let i = 0; i < arr.length; i += n) {
    yield arr.slice(i, i + n);
  }
}

export function isNumber(n) {
  return !isNaN(parseFloat(n)) && !isNaN(n - 0);
}
