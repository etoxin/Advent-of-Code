const puzzleInput = await Deno.readTextFile("./2024/day-2-input.txt");
const lines = puzzleInput.split("\n");
lines.pop();

const parsed = lines.map((l) => {
    const what = l.split(" ").map((s) => Number(s));
    return what.at(0) > what.at(-1) ? what : what.reverse();
});

console.log(parsed);
const status: boolean[] = [];
parsed.map((level, levelIndex) => {
    level.reduce((acc, cur, index) => {
        if (index === 0) return cur;
        const diff = acc - cur;

        if(diff >= 1 && diff <= 3 && status[levelIndex] !== false) {
            status[levelIndex] = true;
        } else {
            status[levelIndex] = false;
        }

        return cur;
    }, 0);
});

const result = status.filter(v => v===true).length;

console.log(result);
