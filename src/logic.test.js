let logic = require("./logic");

test("test sink function", () => {
  let ship1 = logic.ships(
    "Patrol",
    [logic.field[0], logic.field[3], logic.field[7]],
    0
  );
  expect(ship1.sunk()).toBe("ship has sunk");
});

test("test hit function", () => {
  let ship1 = logic.ships(
    "Patrol",
    [logic.field[0], logic.field[3], logic.field[7]],
    3
  );

  expect(ship1.hit()).toBe(2);
});

test("test hit function if length is 0", () => {
  let ship1 = logic.ships(
    "Patrol",
    [logic.field[0], logic.field[3], logic.field[7]],
    0
  );

  expect(ship1.hit()).toBe("ship has already been sunk");
});
