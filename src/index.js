import * as logic from "./logic.js";
import * as visual from "./visual.js";

let playerChoice = document.querySelector(".playerArray");
let computerBoard = document.querySelector(".computerArray");
let winner = document.querySelector(".winner-text");
let btn = document.querySelector(".btn");
let turn = document.querySelector(".turn");

let playerGameboard = new logic.gameboard();
let computerGameboard = new logic.gameboard();
let player = new logic.player("player");
let computer = new logic.player("computer");
visual.displayBoard(playerGameboard.board, computerGameboard.board);
visual.hover(playerGameboard, 5);

btn.addEventListener("click", (e) => {
  if (e.target.textContent === "vertical") {
    btn.textContent = "horizontal";
  } else {
    btn.textContent = "vertical";
  }
});

playerChoice.addEventListener("click", (e) => {
  let orientation = btn.textContent;
  console.log(orientation);

  let cell = e.target.textContent;
  let arr = [];
  console.log("Cell:", cell);
  placeShip(cell, orientation);
});

let counter = 5;

playerChoice.addEventListener("click", () => {
  counter--;
  playerChoice.removeEventListener("mouseover", (e) => {
    arr.forEach((element) => {
      element.style.backgroundColor = " #52688f";
      element.style.color = " #52688f";
    });

    let orientation = document.querySelector(".btn").textContent;
    let start = e.target.dataset.cell;

    let split = start.split("");
    console.log("Split:", split);

    let row = split[0];
    let column = Number(split[1]);
    console.log(typeof column);

    console.log("Row:", row);
    console.log("Column:", column);

    let finalRow = row.toUpperCase();
    let ans = finalRow.charCodeAt() - 65;
    console.log("Answer:", ans);

    if (orientation === "vertical") {
      for (let m = 0; m < length; m++) {
        let j = ans;
        let col = Number(column);

        Array.from(playerBoard.children).forEach((i) => {
          if (i.dataset.cell === board[j][col - 1]) {
            i.style.backgroundColor = "#F7CB2D";
            i.style.color = "#F7CB2D";

            arr.push(i);
          }
        });
        console.log(arr);

        ans++;
      }
    }

    if (orientation === "horizontal") {
      for (let m = 0; m < length; m++) {
        let j = ans;

        Array.from(playerBoard.children).forEach((i) => {
          if (i.dataset.cell === board[j][column - 1]) {
            i.style.backgroundColor = "#F7CB2D";
            i.style.color = "#F7CB2D";

            arr.push(i);
          }
        });
        column++;
      }
    }
    // let cellTarget = e.target;
    // let cell = cellTarget.dataset.cell;
    // console.log(cell);
  });

  if (counter < 2) {
    return;
  } else {
    visual.hover(playerGameboard, counter);
    console.log(counter);
  }
});
/// gameflow begins here

computerBoard.addEventListener("click", (e) => {
  if (
    turn.textContent !== "Player Turn" ||
    turn.textContent === "Place your ships"
  ) {
    return;
  } else {
    let cell = e.target.dataset.cell;
    console.log("Attack cell:", cell);

    computerGameboard.recieveAttack(cell, computerGameboard);

    console.log("Computer Gameboard", computerGameboard);

    if (computerGameboard.allSunk(computerGameboard) === "THE WINNER") {
      turn.textContent = "Player has won!";
      visual.displayBoard(playerGameboard.board, computerGameboard.board);

      return;
    } else {
      turn.textContent = "Computer Turn";
      visual.displayBoard(playerGameboard.board, computerGameboard.board);
      console.log("Player turn finished");
      computerMove();
    }
  }
});

function computerMove() {
  if (turn.textContent === "Player Turn") {
    return;
  } else {
    let computerAttack = computer.computerPlay();
    playerGameboard.recieveAttack(computerAttack, playerGameboard);
    visual.displayBoard(playerGameboard.board, computerGameboard.board);
    if (playerGameboard.allSunk(playerGameboard) === "THE WINNER") {
      turn.textContent = "Computer has won!";
      return;
    } else {
      turn.textContent = "Player Turn";
      console.log("Computer turn finished");
    }
  }
}

function placeShip(cell, orientation) {
  let temp = playerGameboard.board;

  if (temp.some((row) => row.some((x) => x.name === "ds"))) {
    /// return if all ships are placed and baord is clicked aka do nothing
    return;
  }

  if (temp.some((row) => row.some((x) => x.name === "cr"))) {
    let ship4 = new logic.ships("ds", cell, 2, orientation);
    let playerBoard = playerGameboard.gameboardPosition(ship4, playerGameboard);
    if (playerBoard === undefined) {
      console.log(playerBoard);
      console.log("Pick another position!");
    } else {
      visual.displayBoard(playerBoard, computerGameboard.board);
    }
    computerPlace(); /// once all the ships is placed, generate the ships
    turn.textContent = "Player Turn";
    return;
  }

  if (temp.some((row) => row.some((x) => x.name === "su"))) {
    let ship4 = new logic.ships("cr", cell, 3, orientation);
    let playerBoard = playerGameboard.gameboardPosition(ship4, playerGameboard);
    if (playerBoard === undefined) {
      console.log(playerBoard);
      console.log("Pick another position!");
    } else {
      visual.displayBoard(playerBoard, computerGameboard.board);
    }
    return;
  }

  if (temp.some((row) => row.some((x) => x.name === "bs"))) {
    let ship3 = new logic.ships("su", cell, 3, orientation);
    let playerBoard = playerGameboard.gameboardPosition(ship3, playerGameboard);
    if (playerBoard === undefined) {
      console.log(playerBoard);
      console.log("Pick another position");
    } else {
      visual.displayBoard(playerBoard, computerGameboard.board);
    }
    return;
  }

  if (temp.some((row) => row.some((x) => x.name === "ca"))) {
    let ship1 = new logic.ships("bs", cell, 4, orientation);
    let playerBoard = playerGameboard.gameboardPosition(ship1, playerGameboard);
    if (playerBoard === undefined) {
      console.log(playerBoard);
      console.log("Pick another position!");
    } else {
      visual.displayBoard(playerBoard, computerGameboard.board);
    }
    return;
  }

  if (temp.every((row) => row.every((x) => typeof x === "string"))) {
    let ship2 = new logic.ships("ca", cell, 5, orientation);
    let playerBoard = playerGameboard.gameboardPosition(ship2, playerGameboard);
    if (playerBoard === undefined) {
      console.log(playerBoard);
      console.log("Pick another position!");
    } else {
      visual.displayBoard(playerBoard, computerGameboard.board);
    }

    return;
  }

  console.log(playerGameboard.board);
}

function computerPlace() {
  /// 3 needs to repeat twice
  let name;
  let length;
  for (let i = 2; i < 6; i++) {
    if (i === 2) {
      name = "ds";
      length = 2;
    }

    if (i === 3) {
      name = "su";
      length = 3;
      for (let k = 0; k <= 2; k++) {
        let computerShip = new logic.ships(
          name,
          logic.field[computerGameboard.computerGenerate().row][
            computerGameboard.computerGenerate().column
          ],
          3,
          computerGameboard.computerGenerate().orientation
        );
        console.log(computerShip);

        let computerPlace = computerGameboard.gameboardPosition(
          computerShip,
          computerGameboard
        );

        visual.displayBoard(playerGameboard.board, computerGameboard.board);
        name = "cr";
      }
    }

    if (i === 4) {
      name = "bs";
      length = 4;
    }

    if (i === 5) {
      name = "ca";
      length = 5;
    }

    let computerShip = new logic.ships(
      name,
      logic.field[computerGameboard.computerGenerate().row][
        computerGameboard.computerGenerate().column
      ],
      length,
      computerGameboard.computerGenerate().orientation
    );
    console.log(computerShip);

    let computerPlace = computerGameboard.gameboardPosition(
      computerShip,
      computerGameboard
    );

    visual.displayBoard(playerGameboard.board, computerGameboard.board);
  }
}

// let player = new logic.player("Player1", logic.field[2][6]);
// let computer = new logic.player("computer");

/// loops through the array and visually displays it

/// generate user
/// generate computer
/// generate user board
/// generate computer board
/// place user ships
/// generate computer ships

// let ship = new logic.ships("ship", logic.field[7][1], 3, "horizontal");
// let variable = ship;

// let gameboard = new logic.gameboard();
// gameboard.gameboardPosition(ship, gameboard);

// let ship2 = new logic.ships("ship2", logic.field[6][6], 3, "horizontal");
// let gameboard2 = new logic.gameboard();

// let variable2 = ship;

// gameboard.gameboardPosition(ship2, gameboard2);
// // gameboard.recieveAttack(logic.field[0][1], gameboard); /// a
// // gameboard.recieveAttack(logic.field[1][1], gameboard); /// b
// // gameboard.recieveAttack(logic.field[2][1], gameboard); /// c
// // gameboard.recieveAttack(logic.field[3][1], gameboard); /// d
// // gameboard.recieveAttack(logic.field[4][1], gameboard); /// e
// // gameboard.recieveAttack(logic.field[5][1], gameboard); /// f

// // gameboard.recieveAttack(logic.field[7][1], gameboard); /// f

// // gameboard.allSunk(gameboard);
// let computer = new logic.player("computer");
// let player = new logic.player("player", logic.field[2][3]);

// console.log(computer);

// let attack = computer.computerPlay();
// let playerAttack = player.attack;
// console.log("Player", playerAttack);
// console.log("Computer Move", attack);
