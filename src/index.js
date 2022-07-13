/// coordinates will be an array
import * as logic from "./logic.js";

let ship1 = logic.ships("Patrol", [
  logic.field[0],
  logic.field[8],
  logic.field[10],
]);

console.log(ship1);
console.log(logic.ships);
console.log(ship1.coordinates);
console.log(ship1.coordinates[0]);

ship1.coordinates[0].forEach((element) => {
  let index = logic.field.indexOf(element);
  console.log(index);

  logic.field[index] = "p";
});

console.log(logic.field);
