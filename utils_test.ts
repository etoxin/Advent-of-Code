import { InputProcessor } from "./utils.ts";
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";

const testInput = "12345\nqwert\nasdfg\nzxcvb\n67890";

const testMatrix: string[][] = [
  ["1", "2", "3", "4", "5"],
  ["q", "w", "e", "r", "t"],
  ["a", "s", "d", "f", "g"],
  ["z", "x", "c", "v", "b"],
  ["6", "7", "8", "9", "0"],
];

Deno.test("InputProcessor: getMatrix", () => {
  const setup = new InputProcessor(testInput);
  const result = setup.getMatrix();
  assertEquals(result, testMatrix);
});

Deno.test("InputProcessor: getEntry", () => {
  const setup = new InputProcessor(testInput);
  const result = setup.getEntry(2, 2);
  assertEquals(result, "d");
});

Deno.test("InputProcessor: getEntryWithNeighbors", () => {
  const setup = new InputProcessor(testInput);
  const result = setup.getEntryWithNeighbors(2, 2);
  assertEquals(result, {
    entry: ["d", [2, 2]],
    above: ["e", [1, 2]],
    below: ["c", [3, 2]],
    before: ["s", [2, 1]],
    after: ["f", [2, 3]],
  });
});

Deno.test("InputProcessor: getEntryWithNeighbors Edge", () => {
  const setup = new InputProcessor(testInput);
  const result = setup.getEntryWithNeighbors(0, 0);
  assertEquals(result, {
    entry: ["1", [0, 0]],
    above: [null, [-1, 0]],
    below: ["q", [1, 0]],
    before: [null, [0, -1]],
    after: ["2", [0, 1]],
  });
});

Deno.test("InputProcessor: getEntryAt", () => {
  const setup = new InputProcessor(testInput);
  const result = setup.getEntryAt(-2, -2);
  assertEquals(result, "v");
});
