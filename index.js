const readlineSync = require("readline-sync");
const { shuffleCards, initializePlayersPile } = require("./utils/helper");
let drawPile = shuffleCards();
console.log("** Card Game **");
const numberOfPlayers = parseInt(
  readlineSync.question("How many players are onboard? ")
);

({ playersPile, drawPile } = initializePlayersPile(numberOfPlayers, drawPile));

console.log(playersPile.length);
console.log(drawPile.length);
// Chnage it to true when while loop is finished
let gameStatus = false;
while (gameStatus && drawPile.length !== 0) {
  //
}
