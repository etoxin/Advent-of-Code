const puzzleInput = `0 3 6 9 12 15
1 3 6 10 15 21
10 13 16 21 30 45`;

const lines = puzzleInput.split("\n").map((l) =>
  l.split(" ").map((sn) => Number(sn))
);

console.log(lines);
