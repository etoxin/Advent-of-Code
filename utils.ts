export const sum = (a: number, c: number) => a + c;

export function* chunks(arr: string, n: number) {
  for (let i = 0; i < arr.length; i += n) {
    yield arr.slice(i, i + n);
  }
}

export function isNumber(n: unknown) {
  // @ts-ignore
  return !isNaN(parseFloat(n)) && !isNaN(n - 0);
}

export class InputProcessor {
  readonly #matrix: string[][];

  constructor(str: string) {
    this.#matrix = str.split("\n").map((l) => l.split("").map((char) => char));
  }

  getMatrix() {
    return this.#matrix;
  }

  getEntryAt(row: number, col: number): null | string {
    const rowArr = this.#matrix.at(row);
    if (!rowArr) return null;
    return rowArr.at(col) ?? null;
  }

  getEntry(row: number, col: number): null | string {
    const rowArr = this.#matrix[row];
    if (!rowArr) return null;
    return rowArr[col] ?? null;
  }

  getEntryWithNeighbors(row: number, col: number) {
    return {
      entry: [this.getEntry(row, col), [row, col]],
      above: [this.getEntry(row - 1, col), [row - 1, col]],
      below: [this.getEntry(row + 1, col), [row + 1, col]],
      before: [this.getEntry(row, col - 1), [row, col - 1]],
      after: [this.getEntry(row, col + 1), [row, col + 1]],
    };
  }
}
