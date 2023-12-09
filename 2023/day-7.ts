const puzzleInput = `32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483`;

enum CardValue {
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5,
  Six = 6,
  Seven = 7,
  Eight = 8,
  Nine = 9,
  Ten = "T",
  Jack = "J",
  Queen = "Q",
  King = "K",
  Ace = "A",
}

enum HandType {
  HighCard,
  OnePair,
  TwoPair,
  ThreeOfAKind,
  FullHouse,
  FourOfAKind,
  FiveOfAKind,
}

const hashTableOfSorts = new Map();

const faceValue = [
  CardValue.One,
  CardValue.Two,
  CardValue.Three,
  CardValue.Four,
  CardValue.Five,
  CardValue.Six,
  CardValue.Seven,
  CardValue.Eight,
  CardValue.Nine,
  CardValue.Ten,
  CardValue.Jack,
  CardValue.Queen,
  CardValue.King,
  CardValue.Ace,
];
const type = [
  HandType.HighCard,
  HandType.OnePair,
  HandType.TwoPair,
  HandType.ThreeOfAKind,
  HandType.FullHouse,
  HandType.FourOfAKind,
  HandType.FiveOfAKind,
];

for (let i = 0, score = 0; i < faceValue.length; i++) {
  const faceValueType = faceValue[i];
  for (let j = 0; j < type.length; j++, score++) {
    const typeCard = type[j];
    hashTableOfSorts.set(`${typeCard}-${faceValueType}`, score);
  }
}

console.log(hashTableOfSorts);

const games = puzzleInput.split("\n").map((rawHand) => {
  const [cardGroup, bid] = rawHand.split(/\s/);
  return {
    cardGroup,
    bid,
  };
});

const classifiedHands = games.map(({ cardGroup, bid }) => {
  const what = Object.groupBy([...cardGroup], (c) => c);
  const typeGroups = Object.entries(what);
  const typeAmounts = typeGroups.map(([c, cs]) => [c, cs.length]);

  const score = Math.max(
    ...typeAmounts.map((c) => hashTableOfSorts.get(`${c[1]}-${c[0]}`)),
  );

  return {
    bid,
    cardGroup,
    typeAmounts,
    score,
  };
});

const rankedCards = classifiedHands.sort((a, b) => {
  if (a.score === b.score) {
    console.log(4444444, a, b);
  }
  return a.score - b.score;
});

console.log(rankedCards);
