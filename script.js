/*


VARIABLES


*/

let startBtn = document.getElementById("resetbutton");
let diceBtn = document.getElementById("rollbutton");
let players = [
  {
    name: "Player 1",
    position: 0,
    color: "red",
    previousPosition: 0,
  },
  {
    name: "Player 2",
    position: 0,
    color: "blue",
    previousPosition: 0,
  },
];
let currentPlayer = players[0].name;

/*


FUNCTIONS


*/

const rollDiceFunc = () => {
  if (currentPlayer == players[0].name) {
    currentPlayer = players[1].name;

    validMove(0);
  } else if (currentPlayer == players[1].name) {
    currentPlayer = players[0].name;
    validMove(1);
  }
};

const snakeOrLadder = (playersIndex, previousPosition, newPosition) => {
  // if (newPosition == 49) {
  //   players[playersIndex].position = 2; //snake
  // } else if (newPosition == 10) {
  //   players[playersIndex].position = 32; //ladder
  // } else if (newPosition == 36) {
  //   players[playersIndex].position = 23; //snake
  // } else if (newPosition == 18) {
  //   players[playersIndex].position = 40; //ladder
  // } else if (newPosition == 26) {
  //   players[playersIndex].position = 7; //snake
  // } else if (newPosition == 5) {
  //   players[playersIndex].position = 17; //ladder
  // }
};

const checkWin = (playersIndex) => {
  if (players[playersIndex].position === 50) {
    alert(players[playersIndex].name + " WINS!");
    // diceBtn.disabled = true;
    console.log(players[playersIndex].position);
  }
};
const validMove = (playersIndex) => {
  let previousPosition = players[playersIndex].position;
  players[playersIndex].previousPosition = players[playersIndex].position;
  let randomDice = Math.floor(Math.random() * 6) + 1;
  console.log(players[playersIndex].name + " rolled: " + randomDice);
  if (players[playersIndex].position + randomDice > 50) {
    players[playersIndex].position = players[playersIndex].position;
  } else {
    players[playersIndex].position += randomDice;
    console.log(players[playersIndex].position);
    if (players[playersIndex].position == 49) {
      players[playersIndex].position = 2; //snake
    } else if (players[playersIndex].position == 10) {
      players[playersIndex].position = 32; //ladder
    } else if (players[playersIndex].position == 36) {
      players[playersIndex].position = 23; //snake
    } else if (players[playersIndex].position == 18) {
      players[playersIndex].position = 40; //ladder
    } else if (players[playersIndex].position == 26) {
      players[playersIndex].position = 7; //snake
    } else if (players[playersIndex].position == 5) {
      players[playersIndex].position = 17; //ladder
    }
    console.log(
      players[playersIndex].name +
        " position: " +
        players[playersIndex].position
    );
    let newPosition = players[playersIndex].position;
    let prevPositionDiv = document.getElementById(previousPosition);
    let newPositionDiv = document.getElementById(newPosition);

    if (players[0].position == players[1].position) {
      newPositionDiv.style.backgroundColor = "#7a0085";
      prevPositionDiv.style.backgroundColor = "#48b4a1";
    } else if (players[0].previousPosition != players[1].previousPosition) {
      newPositionDiv.style.backgroundColor = players[playersIndex].color;
      prevPositionDiv.style.backgroundColor = "#48b4a1";
    }
    // } else if (players[0].position != players[1].position) {
    //   newPositionDiv.style.backgroundColor = players[playersIndex].color;
    // }

    // if (playersIndex == 0) {
    //   console.log(
    //     "sjdbfsj: " + prevPositionDiv.style.backgroundColor,
    //     newPositionDiv.style.backgroundColor
    //   );
    //   if (prevPositionDiv.style.backgroundColor == "#7a0085") {
    //     //purple
    //     prevPositionDiv.style.backgroundColor = players[1].color;
    //   } else if (prevPositionDiv.style.backgroundColor == players[0].color) {
    //     prevPositionDiv.style.backgroundColor = "#48b4a1";
    //   }
    //   if (newPositionDiv.style.backgroundColor == players[1].color) {
    //     newPositionDiv.style.backgroundColor = "#7a0085";
    //   } else if (newPositionDiv.style.backgroundColor == "#48b4a1" /* cyan*/) {
    //     console.log("Hello");
    //     newPositionDiv.style.backgroundColor = players[0].color;
    //   }
    // } else if (playersIndex == 1) {
    //   if (prevPositionDiv.style.backgroundColor == "#7a0085") {
    //     prevPositionDiv.style.backgroundColor = players[0].color;
    //   } else if (prevPositionDiv.style.backgroundColor == players[1].color) {
    //     prevPositionDiv.style.backgroundColor = "#48b4a1";
    //   }
    //   if (newPositionDiv.style.backgroundColor == players[0].color) {
    //     newPositionDiv.style.backgroundColor = "#7a0085";
    //   } else if (newPositionDiv.style.backgroundColor == "#48b4a1") {
    //     newPositionDiv.style.backgroundColor = players[1].color;
    //   }
    // }
  }

  checkWin(playersIndex);

  //#7a0085
  // #48b4a1
};

// const startGame = () => {
//   diceBtn.disabled = false;
// };

diceBtn.addEventListener("click", rollDiceFunc);
// startBtn.addEventListener("click", startGame);

// let previousPosition = players[playersIndex].position;
// console.log("prev: " + previousPosition);
// players[playersIndex].position += randomDice;
// let newPosition = players[playersIndex].position;
// console.log("now: " + newPosition);
