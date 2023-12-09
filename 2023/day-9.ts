const puzzleInput = await Deno.readTextFile("./2023/day-9-input.txt");

const _puzzleInput = `0 3 6 9 12 15
1 3 6 10 15 21
10 13 16 21 30 45`;

const ___puzzleInput =
  `15 18 30 59 111 187 296 499 999 2292 5394 12159 25703 50949 95308 169511 288607 473142 750534 1156659 1737663`;

const lines = puzzleInput.split("\n").map((l) =>
  l.split(" ").map((sn) => Number(sn))
);

const diff = (a: number, b: number) => Math.abs(a - b);
const isZero = (i: number) => i === 0;

function findDifferenceSequence(sequence) {
    let differences = [];
    for(let i = 0; i < sequence.length - 1; i++) {
        differences.push(sequence[i + 1] - sequence[i]);
    }
    return differences;
}

function isRootSequence(sequence: number[]) {
    let isRoot = true;
    for(let i = 0; i < sequence.length; i++) {
        if (sequence[i] != 0) {
            isRoot = false;
            break;
        }
    }
    return isRoot;
}

const createDiff = (l: number[]): number[] => {
  // if (l.length === 1) return l;

  const diffArr = l.map((value, index, array) => {
    if (index + 1 <= array.length) {
      return diff(value, array[index + 1]);
    }
  });
  diffArr.pop();
  return diffArr;
};

const result = lines.map((l) => {
  const tree = [l];
  while (!isRootSequence(tree.at(-1))) {
    tree.push(findDifferenceSequence(tree.at(-1)));
  }
  return tree.map((l) => l.at(-1)).reverse().reduce((acc, cur) => {
    return acc + cur;
  }, 0);
}).reduce((acc, cur) => acc + cur);


// 1939607039
console.log(result);
