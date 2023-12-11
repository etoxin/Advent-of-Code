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
    this.#matrix = str.split("\n").map((l) =>
        l.split("").map((char) => char)
    );
  }

  getMatrix() {
    return this.#matrix;
  }

  getEntry(row: number, col: number) {
    const rowArr = this.#matrix.at(row);
    if(!rowArr) return null;
    return rowArr.at(col) ?? null;
  }
}
