let logic = require("./logic");

test("test sink function", () => {
  let ship1 = new logic.ships(
    "p",
    [logic.field[1][1], logic.field[1][2], logic.field[1][3]],
    3
  );
  expect(ship1.sunk()).toBe("ship has sunk");
});

test("test hit function", () => {
  let ship1 = new logic.ships(
    "p",
    [logic.field[1][1], logic.field[1][2], logic.field[1][3]],
    3
  );

  expect(ship1.hit()).toBe(2);
});
