const puzzleInput = await Deno.readTextFile("./2023/day-2-input.txt");
const lines = puzzleInput.split('\n');

const dice = new Set([
    [{rx: /[0-9]{0,4}\sblue/g, max: 14}],
    [{rx: /[0-9]{0,4}\sgreen/g, max: 13}],
    [{rx: /[0-9]{0,4}\sred/g, max: 12}]
])

const result = lines.filter(line => {
    let validGame = true;
    line.split('; ').forEach(hand => {
        [...dice].forEach(([{rx, max}]) => {
            if ((hand.match(rx) ?? ['0']).reduce((acc, cur) => acc + Number(cur.split(' ')[0]), 0) > max) validGame = false;
        });
    })
    return validGame;
}).reduce((acc, cur) => acc + Number(cur.match(/Game\s[0-9]{0,3}/)[0].split(' ')[1]), 0);

// 2818
console.log(result);
