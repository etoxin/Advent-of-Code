import {NUMBER_REGEX} from "../constants.ts";

const puzzleInput = await Deno.readTextFile("./2023/day-3-input.txt");

const _puzzleInput =
    `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`


const lines = puzzleInput.split('\n');
const tally: string[] = [];

lines.forEach((line, rowNumber) => {
    const partNumbers = ([...line.matchAll(NUMBER_REGEX)]).filter(([partNumber]) => partNumber !== "");
    partNumbers.forEach((pnRx) => {
        const partNumber = pnRx[0];
        const numberIndexStart = pnRx.index ?? 0;
        const numberPositionStart = numberIndexStart - 1;
        const numberIndexEnd = numberIndexStart + (partNumber.length - 1);
        const numberPostionEnd = numberIndexEnd + 1;

        const lineAbove = lines[rowNumber - 1];
        const lineBelow = lines[rowNumber + 1];

        const surroundingCharacter = new Map([
            ['characterBefore', line.charAt(numberIndexStart - 1)],
            ['characterAfter', line.charAt(numberIndexEnd + 1)],
            ['charactersAbove', lineAbove?.substring(numberPositionStart, numberPostionEnd + 1) ?? ''],
            ['charactersBelow', lineBelow?.substring(numberPositionStart, numberPostionEnd + 1) ?? '']
        ])

        const toTest = Array.from(surroundingCharacter.values()).join('');

        const hasSymbol: boolean = !!toTest.replace(/[.0-9]/g, '').length

        if (hasSymbol) {
            tally.push(partNumber);
        }
    });
});

const result = tally.reduce((acc, cur) => acc + Number(cur), 0);

console.log(result);
