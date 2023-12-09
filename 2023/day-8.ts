const puzzleInput = await Deno.readTextFile("./2023/day-8-input.txt");
const _puzzleInput = `LLR

AAA = (BBB, BBB)
BBB = (AAA, ZZZ)
ZZZ = (ZZZ, ZZZ)`;

const END_KEY = "ZZZ";
const directionsMap = new Map<string, { L: string; R: string }>();
const lines: string[] = puzzleInput.split("\n");
let directions = lines.shift()?.split("");
directions = Array(1000).fill(directions).flat();
lines.shift();

lines.forEach((ln) => {
  const [key, left, right] = [...ln.matchAll(/[A-Z]{1,3}/g)];
  directionsMap.set(key.at(0) ?? "", {
    "L": left.at(0) ?? "",
    "R": right.at(0) ?? "",
  });
});

directions.reduce((acc, cur, count, arr) => {
  const step = directionsMap.get(acc);
  const next = step[cur];
  if (next === END_KEY) {
    console.log(count + 1);
    arr.splice(1);
  }
  return next;
}, "AAA");
