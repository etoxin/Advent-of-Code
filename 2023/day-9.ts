const puzzleInput = `0 3 6 9 12 15
1 3 6 10 15 21
10 13 16 21 30 45`;

const lines = puzzleInput.split("\n").map((l) =>
  l.split(" ").map((sn) => Number(sn))
);

const diff = (a: number, b: number) => Math.abs(a - b);
const isZero = (i: number) => i === 0;

const createDiff = (l: number[]) => {
  const diffArr = l.map((value, index, array) => {
    if (index + 1 < array.length) {
      return diff(value, array[index + 1]);
    }
  });
  diffArr.pop();
  return diffArr;
};

const result = lines.map((l) => {
  const tree = [l];
  while (!tree.at(-1).every(isZero)) {
    tree.push(createDiff(tree.at(-1)));
  }
  return tree.map((l) => l.at(-1)).reverse().reduce((acc, cur) => {
    return acc + cur;
  }, 0);
}).reduce((acc, cur) => acc + cur);

console.log(result);
