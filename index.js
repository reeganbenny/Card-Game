const readlineSync = require("readline-sync");
const { startGame } = require("./controllers/startGame");

let gameStatus = true;
let numberOfPlayers = 0;

// Card Game initialization:- No. of players must be b/w 2 & 4 to start the game. If it's 0 Game stops!
do {
  console.clear();
  numberOfPlayers !== 0
    ? console.log("Number of players must be between 2 & 4 or Enter 0 to exit")
    : console.log("\t\t\t** Swiggy Card Game **\n");
  numberOfPlayers = parseInt(
    readlineSync.question(
      "How many players are onboard(0:exit, min:2 - max:4)? "
    )
  );
  gameStatus = numberOfPlayers === 0 ? false : true;
  if (numberOfPlayers >= 2 && numberOfPlayers <= 4) {
    gameStatus = startGame(numberOfPlayers);
  } else {
    gameStatus && console.log("Exiting from game....");
  }
} while (numberOfPlayers !== 0 && gameStatus);
