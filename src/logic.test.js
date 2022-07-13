let logic = require("./logic");

test("test sink function", () => {
  let ship1 = logic.ships(
    "Patrol",
    [logic.field[0], logic.field[3], logic.field[7]],
    0
  );
  expect(ship1.sunk()).toBe("ship has sunk");
});
