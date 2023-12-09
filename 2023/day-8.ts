const puzzleInput = `RL

AAA = (BBB, CCC)
BBB = (DDD, EEE)
CCC = (ZZZ, GGG)
DDD = (DDD, DDD)
EEE = (EEE, EEE)
GGG = (GGG, GGG)
ZZZ = (ZZZ, ZZZ)`

const END_KEY = 'ZZZ';
const directionsMap = new Map<string, { L: string, R: string }>()
const lines: string[] = puzzleInput.split('\n');
let directions = lines.shift()?.split('');
directions ??= [];
lines.shift()

lines.forEach(ln => {
    const [key, left, right] = [...ln.matchAll(/[A-Z]{1,3}/g)];
    directionsMap.set(key.at(0) ?? '', {"L": left.at(0) ?? '', "R": right.at(0) ?? ''})
});

directions.reduce((acc, cur, count) => {
    const step = directionsMap.get(acc);
    const next = step[cur];
    if (next === END_KEY) {
        console.log(count + 1);
    }
    return next;
}, 'AAA')
