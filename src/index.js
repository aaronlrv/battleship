import * as logic from "./logic.js";

let ship = new logic.ships("ship", logic.field[7][1], 3, "vertical");
let variable = ship;

let gameboard = new logic.gameboard();
gameboard.gameboardPosition(ship, gameboard);

let ship2 = new logic.ships("ship2", logic.field[6][6], 3, "horizontal");
let gameboard2 = new logic.gameboard();

let variable2 = ship;

gameboard.gameboardPosition(ship2, gameboard2);
