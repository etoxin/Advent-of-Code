const puzzleInput = `32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483`

enum HandType {
    HighCard,
    OnePair,
    TwoPair,
    ThreeOfAKind,
    FullHouse,
    FourOfAKind,
    FiveOfAKind,
}

const games = puzzleInput.split('\n').map(rawHand => {
    const [cardGroup, bid] = rawHand.split(/\s/);
    return {
        cardGroup,
        bid
    }
});



const classifiedHands = games.map(({cardGroup, bid}) => {
    const what = Object.groupBy([...cardGroup], c => c);
    const typeGroups = Object.entries(what);
    const typeAmounts = typeGroups.map(([c,cs]) => cs.length);
    const playedType = Math.max(...typeAmounts);





    return {
        bid,
        cardGroup,
        typeAmounts,
        playedType
    }
});

const rankedCards = classifiedHands.sort((a,b) => {
    if (a.playedType === b.playedType) {
        return 1;
    } else if (a.playedType < b.playedType) {
        return 1;
    } else {
        return -1;
    }
});


console.log(rankedCards);
