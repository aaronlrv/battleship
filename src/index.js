import * as logic from "./logic.js";

let ship = new logic.ships("ship", logic.field[7][1], 3, "vertical");
let variable = ship;

let gameboard = new logic.gameboard();
gameboard.gameboardPosition(ship, gameboard);

let ship2 = new logic.ships("ship2", logic.field[6][6], 3, "horizontal");
let gameboard2 = new logic.gameboard();

let variable2 = ship;

gameboard.gameboardPosition(ship2, gameboard2);
gameboard.recieveAttack(logic.field[0][1], gameboard); /// a
gameboard.recieveAttack(logic.field[1][1], gameboard); /// b
gameboard.recieveAttack(logic.field[2][1], gameboard); /// c
gameboard.recieveAttack(logic.field[3][1], gameboard); /// d
gameboard.recieveAttack(logic.field[4][1], gameboard); /// e
gameboard.recieveAttack(logic.field[5][1], gameboard); /// f

gameboard.recieveAttack(logic.field[7][1], gameboard); /// f
