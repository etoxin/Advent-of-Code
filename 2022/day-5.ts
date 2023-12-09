const instructions = await Deno.readTextFile("day-5-input.txt");

let stacks = [];
let puzzleInput = [
  ["", "", "", "C", "", "", "N", "R", ""],
  ["J", "T", "", "H", "", "", "P", "L", ""],
  ["F", "S", "T", "B", "", "", "M", "D", ""],
  ["C", "L", "J", "Z", "S", "", "L", "B", ""],
  ["N", "Q", "G", "J", "J", "", "F", "F", "R"],
  ["D", "V", "B", "L", "B", "Q", "D", "M", "T"],
  ["B", "Z", "Z", "T", "V", "S", "V", "S", "D"],
  ["W", "P", "P", "D", "G", "P", "B", "P", "V"],
];

const setupInstructions = instructions.split("\n").map((instruction) => {
  return instruction.match(/move (\d+) from (\d+) to (\d+)/).slice(1).map(
    Number,
  );
});

puzzleInput.reverse().forEach((row) =>
  row.forEach((crate, column) => {
    if (crate === "") return;
    stacks[column] ? stacks[column].push(crate) : stacks[column] = [crate];
  })
);

setupInstructions.forEach((inst) => {
  stacks[inst[2] - 1].push(
    ...stacks[inst[1] - 1].splice(-Math.abs(inst[0]), inst[0]),
  );
});

let result = [];

stacks.forEach((stack) => {
  const item = stack.pop();
  result.push(item);
});

console.log("result", result.join(""));
console.assert(result.join("") === "TPFFBDRJD");
