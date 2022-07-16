/// make ship a one coord input
///  you dont need ships to identify themselves
/// if a ship gets hit, it turns red or sumn long term. No ship needs to know when its destroyed themselves

import * as logic from "./logic.js";

let ship = new logic.ships("name", logic.field[1][1], 3, "vertical");
console.log(ship.length);

let variable = ship;
console.log(variable.length);
console.log(variable.start);
console.log(variable.orientation);

let gameboard = new logic.gameboard();
gameboard.gameboardPosition(ship);

/* the current state of mutated board for tests
let gameboard2 = new logic.gameboard(logic.field[1][1], "poo", 3, "horizontal");
gameboard2.gameboardPosition();

let gameboard = new logic.gameboard(logic.field[2][3], "poo", 3, "vertical");
gameboard.gameboardPosition();
*/

console.table(gameboard);

/*
ship1.coordinates.forEach((k) => {
  /// loops through coords
  console.log(k);
  logic.field.forEach((i) => {
    let index1 = i.indexOf(k);


    /// loops through fields array and stores first index
    i.forEach((j) => {
      if (j === k) {
        let index2 = j.indexOf(k);
        console.log("Index 1 Row index:", index1);
        console.log("Index 2 Within the row array:", index2);
        return;
      }
      /// loops through individual array within fields and stores second indes
      /// combines both of them and changes by id
    });
  });
});

console.log(logic.field);
*/

/// what do we want the index of
/// we want the index of the coords element in our original array
/// that being the fields array
/// so we have to search the fields array for the index of our ship array
