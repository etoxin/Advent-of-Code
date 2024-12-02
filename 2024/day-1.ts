const puzzleInput = await Deno.readTextFile("./2024/day-1-input.txt");
const lines = puzzleInput.split("\n");
lines.pop();

const parsed = lines.map((l) => l.split("   "));
const col_A = parsed.map(([a, b]) => a).sort();
const col_B = parsed.map(([a, b]) => b).sort();

const sorted = [];

for (let i = 0; i < col_B.length; i++) {
    const colBElement = col_B[i];
    const colAElement = col_A[i];
    sorted.push([colAElement, colBElement]);
}

const result = sorted.reduce((acc, [a, b]) => {
    const dist = Math.abs(Number(a) - Number(b));
    return acc + dist;
}, 0);

console.log(result);
