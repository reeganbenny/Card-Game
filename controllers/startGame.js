const {
  shuffleCards,
  initializePlayersPile,
  displayGameRules,
} = require("../utils/helper");
const { CardGame } = require("./cardGame");
const readlineSync = require("readline-sync");

// Game Controller
exports.startGame = (numberOfPlayers) => {
  let gameStatus = true;
  let drawPile = shuffleCards();
  ({ playersPile, drawPile } = initializePlayersPile(
    numberOfPlayers,
    drawPile
  ));

  console.clear();
  displayGameRules();
  let newCardGame = new CardGame(playersPile, drawPile);
  do {
    let currentPlayer = newCardGame.getCurrentPlayer();
    console.log(
      `Top Card in Discard Pile: ${JSON.stringify(newCardGame.topCard)}\n`
    );
    console.log(`Current Player: Player ${currentPlayer.id}`);
    console.log(`Current Hand:`);
    for (let i = 0; i < currentPlayer.pile.length; i++) {
      console.log(`index: ${i} - ${JSON.stringify(currentPlayer.pile[i])}`);
    }
    let action = readlineSync.question(
      "\nTo play a card press 'p' or To draw a card press 'd' "
    );
    if (action === "p" || action === "P") {
      let cardIndex = readlineSync.question(
        "Enter the index of the card you want to play? "
      );
      if (newCardGame.isValidCard(cardIndex)) {
        newCardGame.playCard(cardIndex);
        if (newCardGame.gameOver) {
          console.clear();
          console.log(`Player ${currentPlayer.id} wins!!!!`);
        } else {
          readlineSync.question("Please press enter to pass it to next player");
          console.clear();
        }
      } else {
        console.clear();
        console.log(
          "\nPlaying card must match the suit or rank of top card or it must be within the given index\n"
        );
        continue;
      }
    } else if (action === "d" || action === "D") {
      let newCard = newCardGame.drawCard();
      if (newCard !== null) {
        console.log(`New Card add to the pile : ${JSON.stringify(newCard)}`);
        currentPlayer.pile.push(newCard);
        newCardGame.updateCurrentPlayerIndex();
        readlineSync.question("Please press Enter to pass it to next player");
        console.clear();
      } else {
        console.clear();
        console.log("Draw pile is empty...Game result: Draw (No one wins)");
      }
    } else {
      console.clear();
      console.log(`Invalid input(Enter either 'd' / 'p')`);
    }
  } while (!newCardGame.gameOver);
  let gameContinue = readlineSync.question(
    "Do you want to have a rematch? (type 1 for yes)"
  );
  gameStatus = gameContinue === 1 ? true : false;
  return gameStatus;
};
