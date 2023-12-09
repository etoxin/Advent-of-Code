import { isNumber, sum } from "../utils.ts";

const puzzleInput = await Deno.readTextFile("./2023/day-1-input.txt");
const lines = puzzleInput.split("\n");

// remove new line at end of file
lines.pop();

const result = lines.map((line) => {
  const nums = line.split("").filter((letter) => isNumber(letter));
  return nums.length > 1
    ? [nums.shift(), nums.pop()].join("")
    : [parseInt(nums[0]), parseInt(nums[0])].join("");
}).map((s) => Number(s)).reduce(sum, 0);

console.log(result);
