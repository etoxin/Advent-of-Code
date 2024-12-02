const puzzleInput = await Deno.readTextFile("./2024/day-1-input.txt");
const lines = puzzleInput.split("\n");
lines.pop();

const parsed = lines.map((l) => l.split("   "));
const col_A = parsed.map(([a, b]) => a).sort();
const col_B = parsed.map(([a, b]) => b).sort();

const sorted = [];

for (let i = 0; i < col_B.length; i++) {
    const colAElement = col_A[i];
    sorted.push(Number(colAElement)*col_B.filter((v)=> v === colAElement).length);
}

const result = sorted.reduce((acc, v) => {
    return acc + v;
}, 0);

console.log(result);
