import * as logic from "./logic.js";
import * as visual from "./visual.js";
let playerBoard = document.querySelector(".playerArray");
let computerBoard = document.querySelector(".computerArray");

let playerGameboard = new logic.gameboard().board;
let computerGameboard = new logic.gameboard().board;

visual.displayBoard(playerGameboard, computerGameboard);

let player = new logic.player("Player1", logic.field[2][6]);
let computer = new logic.player("computer");

console.log(player);
console.log(computer);
console.log(playerGameboard);
console.log(computerGameboard);

let ship1 = new logic.ships("patrol", logic.field[7][2], 5, "vertical");
/// loops through the array and visually displays it

displayBoard();

/// generate user
/// generate computer
/// generate user board
/// generate computer board
/// place user ships
/// generate computer ships

// let ship = new logic.ships("ship", logic.field[7][1], 3, "vertical");
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
