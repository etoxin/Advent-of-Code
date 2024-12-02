const puzzleInput = await Deno.readTextFile("./2024/day-1-input.txt");
const lines = puzzleInput.split("\n");
lines.pop();

const parsed = lines.map((l) => l.split("   "));
const col_A = parsed.map(([a, ]) => a).sort();
const col_B = parsed.map(([, b]) => b).sort();

const sorted = [];

for (let i = 0; i < col_B.length; i++) {
    sorted.push([col_B[i], col_A[i]]);
}

const result = sorted.reduce((acc, [a, b]) => {
    return acc + Math.abs(Number(a) - Number(b));
}, 0);

console.log(result);
