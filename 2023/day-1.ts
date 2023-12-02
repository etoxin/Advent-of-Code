const puzzleInput = await Deno.readTextFile("./2023/day-1-input.txt");
const lines = puzzleInput.split('\n');

// remove new line at end of file
lines.pop();

const numbers = lines.map(line => {
    const letters = line.split('');
    const nums = letters.filter(letter => !isNaN(parseInt(letter, 10)));
    const num = nums.length > 1 ? [nums.shift(), nums.pop()].join('') : [parseInt(nums[0]), parseInt(nums[0])].join('');
    return num;
})

const result = numbers.map(s => Number(s)).reduce((a, b) => a + b, 0);

console.log(result);

