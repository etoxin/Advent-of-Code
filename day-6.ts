const instructions = await Deno.readTextFile("day-6-input.txt");

const getMarkers = (buffer: string): string => {
    const s = 4;
    const setup = buffer.split('');
    const markers = [];
    for (let i = 0; i < setup.length; i++) {
        if (new Set(setup.slice(i, i + s)).size === s) markers.push(i + s);
    }
    return markers.shift()
}


console.log(getMarkers('bvwbjplbgvbhsrlpgdmjqwftvncz'), 5);
console.log(getMarkers('nppdvjthqldpwncqszvftbrmjlhg'), 6);
console.log(getMarkers('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg'), 10);
console.log(getMarkers('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw'), 11);
console.log(getMarkers(instructions));

