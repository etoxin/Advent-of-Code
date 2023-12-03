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

const ___puzzleInput =
    `.......12.......935............184.720...243........589.652..........435..........483.............6...........................904...........
......*.....968*.....$............*........=..348...*..........986....*...................459....*........422................#......%482....
....291............612....290..........903........699......218*.......376............890....*.838...81......*.....138.../194................
..............156......$..*...891.&731....%..89...................523..........699....+...227......*.......225....=...........388....*......
................*...189..591.*................*.......783.....107..-...54.287..$................533.../..............909........&.603.424...`

const lines = puzzleInput.split('\n');
const tally: string[] = [];


lines.forEach((line, rowNumber) => {
    const partNumbers = (line.match(NUMBER_REGEX) ?? []).filter(m => m !== '');
    partNumbers.forEach((partNumber) => {
        const numberCharStart = line.indexOf(partNumber);
        const numberCharEnd = numberCharStart + partNumber.length;

        const lineAbove = lines[rowNumber - 1];
        const lineBelow = lines[rowNumber + 1];

        const surroundingCharacter = new Map([
            ['characterBefore', line.charAt(numberCharStart - 1)],
            ['characterAfter', line.charAt(numberCharEnd)],
            ['charactersAbove', lineAbove?.substring(numberCharStart - 1, numberCharEnd + 1)??''],
            ['charactersBelow', lineBelow?.substring(numberCharStart - 1, numberCharEnd + 1)??'']
        ])

        const toTest = Array.from(surroundingCharacter.values()).join('');

        const hasSymbol: boolean = !!toTest.replace(/[.0-9]/g, '').length

        if (hasSymbol) {
            tally.push(partNumber);
        }

        if (partNumber === "939") {
            console.log(line, partNumber, hasSymbol, surroundingCharacter);
        }

        // console.log(line, partNumber, hasSymbol, surroundingCharacter);
    });
});

const result = tally.reduce((acc, cur) => acc + Number(cur), 0);

console.log(result);

// 4361

// Not 540092
