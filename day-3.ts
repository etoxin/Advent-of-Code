const puzzleInput = await Deno.readTextFile("day-3-input.txt");
const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
]
let priorities = new Map();
let prioritiesCount = new Map();

letters.forEach((letter, index) => {
    const points = index + 1;
    priorities.set(letter, points);
    priorities.set(letter.toUpperCase(), 26 + points)
    prioritiesCount.set(letter, 0);
    prioritiesCount.set(letter.toUpperCase(), 0);
})

const setup = puzzleInput.split('\n').map(rucksack => {
    return [rucksack.slice(0, rucksack.length / 2), rucksack.slice(rucksack.length / 2, rucksack.length)]
})

setup.forEach(row => {
    row[0].split('').every(c => {
        if (row[1].indexOf(c) >= 0) {
            const prev = prioritiesCount.get(c) + priorities.get(c);
            prioritiesCount.set(c, prev)
            return false
        }
        return true
    })
})

const values = [...prioritiesCount.values()].reduce((a, c) => a + c)

console.log(values);
console.assert(values === 8240);
