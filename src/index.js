/// coordinates will be an array
import * as logic from "./logic.js";

let ship1 = new logic.ships(
  "Patrol",
  [logic.field[0], logic.field[1], logic.field[2]],
  3
);

console.log(ship1);
console.log(logic.ships);
console.log(ship1.coordinates);
console.log(ship1.coordinates[0]);

ship1.coordinates.forEach((element) => {
  let index = logic.field.indexOf(element);
  console.log(index);

  logic.field[index] = "p";
});

console.log(logic.field);
