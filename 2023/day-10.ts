import {InputProcessor} from "../utils.ts";

const puzzleInput = `.....
.S-7.
.|.|.
.L-J.
.....`;

const tiles = new InputProcessor(puzzleInput);
let loopRunning = true;

let x = 1;
let y = 1;
const history = new Set();

while (loopRunning) {
    const { entry} = tiles.getEntryWithNeighbors(x,y);
    // update history
    const [char, row, col] = entry;
    history.add([row, col])

    // find next item




    console.log(history);


    loopRunning = false;
}
