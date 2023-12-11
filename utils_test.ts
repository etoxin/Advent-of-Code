import {InputProcessor} from './utils.ts';
import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";

const testInput = "12345\nqwert\nasdfg\nzxcvb\n67890";

const testMatrix: string[][] = [
    [ '1', '2', '3', '4', '5' ],
    [ 'q', 'w', 'e', 'r', 't' ],
    [ 'a', 's', 'd', 'f', 'g' ],
    [ 'z', 'x', 'c', 'v', 'b' ],
    [ '6', '7', '8', '9', '0' ]
]

Deno.test("InputProcessor: getMatrix",() => {
    const setup = new InputProcessor(testInput);
    const result = setup.getMatrix()
    assertEquals(result, testMatrix);
})

Deno.test("InputProcessor: getEntry",() => {
    const setup = new InputProcessor(testInput);
    const result = setup.getEntry(2,2)
    assertEquals(result, "d");
})
