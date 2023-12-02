

const guards = new Map([
    ['blue', 14],
    ['green', 13],
    ['red', 12]
]);


const puzzleInput = await Deno.readTextFile("./2023/day-2-input.txt");
const lines = puzzleInput.split('\n');

lines.pop();

const blueRegex = /[0-9]{0,4}\sblue/g
const greenRegex = /[0-9]{0,4}\sgreen/g
const redRegex = /[0-9]{0,4}\sred/g
const gameRegex = /Game\s[0-9]{0,3}/


const validGames = lines.filter(line => {
    let validGame = true;
    const throws = line.split('; ');
    throws.forEach(hand => {
        const redCubes = hand.match(redRegex) ?? ['0'];
        const blueCubes = hand.match(blueRegex) ?? ['0'];
        const greenCubes = hand.match(greenRegex) ?? ['0'];

        const redCount = redCubes.reduce((acc, cur) => {
            return acc + parseInt(cur.split(' ')[0]);
        }, 0);
        const blueCount = blueCubes.reduce((acc, cur) => {
            return acc + parseInt(cur.split(' ')[0]);
        }, 0);
        const greenCount = greenCubes.reduce((acc, cur) => {
            return acc + parseInt(cur.split(' ')[0]);
        }, 0);

        if(redCount > guards.get('red')) validGame = false;
        if(blueCount > guards.get('blue')) validGame = false;
        if(greenCount > guards.get('green')) validGame = false;
    })

    return validGame;
});

const result = validGames.reduce((acc, cur) => {
    const gameNumber = cur.match(gameRegex)[0].split(' ')[1];
    return acc + Number(gameNumber);
}, 0);

console.log(result);
