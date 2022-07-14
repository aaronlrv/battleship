/// coordinates will be an array
import * as logic from "./logic.js";

let ship1 = new logic.ships(
  "p",
  [logic.field[1][1], logic.field[1][2], logic.field[1][3]],
  3
);

console.log(ship1);
console.log(logic.ships);
console.log(ship1.coordinates);
console.log(ship1.coordinates[0]);
ship1.gameboardPosition();
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
