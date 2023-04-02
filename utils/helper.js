// Shuffle cards to change the order of decks
exports.shuffleCards = () => {
  let { deckCards } = require("../constants/cards");
  let deckCardsLength = deckCards.length - 1;
  for (let i = deckCardsLength; i > 0; i--) {
    let j = Math.floor(Math.random() * i + 1);
    [deckCards[i], deckCards[j]] = [deckCards[j], deckCards[i]];
  }
  return deckCards;
};

// Initialize players with 5 cards
exports.initializePlayersPile = (numberOfPlayers, drawPile) => {
  let playersPile = new Array(numberOfPlayers).fill().map((_, i) => ({
    id: i + 1,
    pile: [],
  }));
  for (let i = 0; i < numberOfPlayers; i++) {
    playersPile[i].pile = drawPile.slice(-5);
    drawPile.splice(-5, 5);
  }
  return { playersPile, drawPile };
};

//Function to display game rules
exports.displayGameRules = () => {
  const readlineSync = require("readline-sync");
  console.log("\t\t\t\t**Welcome to Swiggy card Game**\n");
  console.log("Please read the instructions before game begins\n");
  console.log(
    "1. Each player starts with a hand of 5 cards.\n" +
      "2. The game starts with a deck of 52 cards ( a standard deck of playing cards).\n" +
      "3. Players take turns playing cards from their hand, following a set of rules that define what cards can be played when.\n" +
      "4. At first a random card will be draw from drawPile to discardPile\n" +
      "5. A player can only play a card if it matches either the suit or the rank of the top card on the discard pile.\n" +
      "6. If a player cannot play a card, they must draw a card from the draw pile.\n" +
      "   If the draw pile is empty, the game ends in a draw and no player is declared a winner.\n" +
      "7. The game ends when one player runs out of cards who is declared the winner.\n" +
      "8. BONUS: Aces, Kings, Queens and Jack are action cards. When one of these is played the following actions occur:\n" +
      "\t1. Ace(A): Skip the next player in turn\n" +
      "\t2. Kings(K): Reverse the sequence of who plays next \n" +
      "\t3. Queens(Q): +2\n" +
      "\t4. Jacks(J): +4\n" +
      "\t5. NOTE: Actions are not stackable i.e. if Q is played by player 1 then player\n" +
      "           two draws two cards and cannot play a Q from his hand on that turn even if available\n"
  );
  readlineSync.question("Press Enter key to continue...");
  console.clear();
};
