/**
 * Time:        60     94     78     82
 * Distance:   475   2138   1015   1650
 */
const puzzleInput = [
    {time: 60947882, distance: 475213810151650},
]




/**
 * Time:      7  15   30
 * Distance:  9  40  200
 */
const _puzzleInput = [
    {time: 71530, distance: 940200},
] as const;





const result = puzzleInput.map(race => {
    const { time, distance } = race;
    let winningScenarios = 0;

    for (let handicap = 1; handicap < time; handicap++) {
        const speed = handicap;
        const timeRemaining = time - handicap;
        const distanceTravelled = speed * timeRemaining;
        if(distanceTravelled > distance) {
            winningScenarios++
        }
    }
    return winningScenarios
}).reduce((acc, cur) => acc * cur);

// 288
console.log(result);

