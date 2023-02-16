const puzzleInput = await Deno.readTextFile("day-4-input.txt");

const _puzzleInput = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`

let count = 0
let count2 = 0
const setup = puzzleInput.split('\n').map(line => {
    const row = line.split(',')
    return [row[0].split('-').map(Number), row[1].split('-').map(Number)]
})

setup.forEach(pairs => {
    const [e1, e2] = pairs;
    if ((e1[0] >= e2[0] && e1[1] <= e2[1]) && (e2[0] >= e1[0] && e2[1] <= e1[1])) {
        count++;
        return
    }
    if (e1[0] >= e2[0] && e1[1] <= e2[1]) count++;
    if (e2[0] >= e1[0] && e2[1] <= e1[1]) count++;
})

setup.forEach(pairs => {
    const [e1, e2] = pairs;
    if ((e1[0] >= e2[0] && e1[1] <= e2[1]) && (e2[0] >= e1[0] && e2[1] <= e1[1])) {
        count2++;
        return
    }
    if (e1[0] >= e2[1] && e1[1] <= e2[0]) count2++;
    if (e2[1] >= e1[0] && e2[0] <= e1[1]) count2++;
})


console.log(count);
console.assert(count === 2);

console.log('----------');

console.log(count2);
console.assert(count2 === 4);