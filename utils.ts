import { isNumber } from "https://deno.land/x/is_number/mod.ts";

export const sum = (a: number, c: number) => a + c;

export function* chunks(arr: string, n: number) {
  for (let i = 0; i < arr.length; i += n) {
    yield arr.slice(i, i + n);
  }
}

/**
 * deprecated
 */
export function _isNumber(n: unknown) {
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

  find(char: string) {
    const matrixCopy = this.#matrix;
    let rowMatch = 0;
    let colMatch = 0;
    for (let x = 0; x < matrixCopy.length; x++) {
      const row = matrixCopy[x];
      for (let y = 0; y < row.length; y++) {
        const col = row[y];
        if (col === char) {
          rowMatch = x;
          colMatch = y;
        }
      }
    }
    if (isNumber(rowMatch) && isNumber(colMatch)) {
      return [rowMatch, colMatch];
    } else {
      throw Error("InputProcessor.find error.");
    }
  }

  getEntryAt(row: number, col: number): null | string {
    const rowArr = this.#matrix.at(row);
    if (!rowArr) return null;
    return rowArr.at(col) ?? null;
  }

  getEntry(row: number, col: number): string {
    const rowArr = this.#matrix[row];
    return rowArr[col];
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
