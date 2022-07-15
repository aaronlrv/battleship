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

test("test gameboard function with variables", () => {
  let coords = [logic.field[1][1], logic.field[1][2], logic.field[1][3]];
  let id = "p";
  let ship1 = new logic.ships(id, coords, 3);
  let gameboard = new logic.gameboard(coords, id);
  gameboard.gameboardPosition();
  console.log(logic.field);

  expect(logic.field).toStrictEqual([
    ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "a10"],
    ["b1", "b2", "p", "p", "p", "b6", "b7", "b8", "b9", "b10"],
    ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10"],
    ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10"],
    ["d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "d10"],
    ["e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "e10"],
    ["f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "f10"],
    ["g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8", "g9", "g10"],
    ["h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8", "h9", "h10"],
    ["i1", "i2", "i3", "i4", "i5", "i6", "i7", "i8", "i9", "i10"],
    ["j1", "j2", "j3", "j4", "j5", "j6", "j7", "j8", "j9", "j10"],
  ]);
});
