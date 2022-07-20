import * as logic from "./logic.js";
import * as visual from "./visual.js";

let playerChoice = document.querySelector(".playerArray");
let computerBoard = document.querySelector(".computerArray");

let playerGameboard = new logic.gameboard();
let computerGameboard = new logic.gameboard();
visual.displayBoard(playerGameboard.board, computerGameboard.board);

playerChoice.addEventListener("click", (e) => {
  let cell = e.target.textContent;
  let arr = [];
  console.log("Cell:", cell);
  placeShip(cell);
});

computerBoard.addEventListener("click", (e) => {
  let cell = e.target.textContent;
  console.log("Attack cell:", cell);

  computerGameboard.recieveAttack(cell, computerGameboard);
  console.log("Computer Gameboard", computerGameboard);
  visual.displayBoard(playerGameboard.board, computerGameboard.board);
});

function placeShip(cell) {
  let temp = playerGameboard.board;

  if (temp.some((row) => row.some((x) => x.name === "ds"))) {
    return;
  }

  if (temp.some((row) => row.some((x) => x.name === "cr"))) {
    let ship4 = new logic.ships("ds", cell, 2, "vertical");
    let playerBoard = playerGameboard.gameboardPosition(ship4, playerGameboard);
    if (playerBoard === undefined) {
      console.log(playerBoard);
      console.log("Pick another position!");
    } else {
      visual.displayBoard(playerBoard, computerGameboard.board);
    }
    return;
  }

  if (temp.some((row) => row.some((x) => x.name === "su"))) {
    let ship4 = new logic.ships("cr", cell, 3, "horizontal");
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
    let ship3 = new logic.ships("su", cell, 3, "vertical");
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
    let ship1 = new logic.ships("bs", cell, 4, "horizontal");
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
    let ship2 = new logic.ships("ca", cell, 5, "horizontal");
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
