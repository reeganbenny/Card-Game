exports.shuffleCards = () => {
  let { deckCards } = require("../constants/cards");
  let deckCardsLength = deckCards.length - 1;
  for (let i = deckCardsLength; i > 0; i--) {
    let j = Math.floor(Math.random() * i + 1);
    [deckCards[i], deckCards[j]] = [deckCards[j], deckCards[i]];
  }
  return deckCards;
};

exports.initializePlayersPile = (numberOfPlayers, drawPile) => {
  let playersPile = new Array(numberOfPlayers).fill().map(() => ({
    pile: [],
  }));
  for (let i = 0; i < numberOfPlayers; i++) {
    playersPile[i].pile = drawPile.slice(-5);
    drawPile = drawPile.slice(0, -5);
  }
  return { playersPile, drawPile };
};
