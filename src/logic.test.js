let logic = require("./logic");

let field;
beforeEach(() => {
  field = logic.field;
  console.log(field);
});

test("test sink function", () => {
  let ship1 = new logic.ships("p", field[1][1], 3);
  expect(ship1.sunk()).toBe("ship has sunk");
});

test.skip("test hit function", () => {
  let ship1 = new logic.ships("p", field[1][1], 3);

  expect(ship1.hit()).toBe(2);
});

test("test gameboard function vertical", () => {
  let ship = new logic.ships("ship", logic.field[1][1], 3, "vertical");
  let variable = ship;

  let gameboard = new logic.gameboard();
  gameboard.gameboardPosition(ship, gameboard);

  expect(gameboard.gameboardPosition(ship, gameboard)).toEqual([
    ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "a10"],
    [
      "b1",
      {
        name: "ship",
        start: "b2",
        length: 3,
        hp: 3,
        orientation: "vertical",
      },
      "b3",
      "b4",
      "b5",
      "b6",
      "b7",
      "b8",
      "b9",
      "b10",
    ],
    [
      "c1",
      {
        name: "ship",
        start: "b2",
        length: 3,
        hp: 3,
        orientation: "vertical",
      },
      "c3",
      "c4",
      "c5",
      "c6",
      "c7",
      "c8",
      "c9",
      "c10",
    ],
    [
      "c1",
      {
        name: "ship",
        start: "b2",
        length: 3,
        hp: 3,
        orientation: "vertical",
      },
      "c3",
      "c4",
      "c5",
      "c6",
      "c7",
      "c8",
      "c9",
      "c10",
    ],
    ["d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "d10"],
    ["e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "e10"],
    ["f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "f10"],
    ["g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8", "g9", "g10"],
    ["h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8", "h9", "h10"],
    ["i1", "i2", "i3", "i4", "i5", "i6", "i7", "i8", "i9", "i10"],
    ["j1", "j2", "j3", "j4", "j5", "j6", "j7", "j8", "j9", "j10"],
  ]);
});

test("test gameboard function horizontal", () => {
  let ship2 = new logic.ships("ship2", logic.field[1][1], 3, "horizontal");
  let gameboard = new logic.gameboard();
  gameboard.gameboardPosition(ship2, gameboard);

  expect(gameboard.gameboardPosition(ship2, gameboard)).toEqual([
    ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "a10"],
    [
      "b1",
      {
        name: "ship2",
        start: "b2",
        length: 3,
        hp: 3,
        orientation: "horizontal",
      },
      {
        name: "ship2",
        start: "b2",
        length: 3,
        hp: 3,
        orientation: "horizontal",
      },
      {
        name: "ship2",
        start: "b2",
        length: 3,
        hp: 3,
        orientation: "horizontal",
      },
      "b5",
      "b6",
      "b7",
      "b8",
      "b9",
      "b10",
    ],
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

test("gameboard function with high co-ordinates vertical", () => {
  let ship = new logic.ships("ship", logic.field[7][1], 3, "vertical");
  let variable = ship;

  let gameboard = new logic.gameboard();
  gameboard.gameboardPosition(ship, gameboard);

  expect(gameboard.gameboardPosition(ship, gameboard)).toEqual([
    ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "a10"],
    ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "b10"],
    ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10"],
    ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10"],
    ["d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "d10"],
    ["e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "e10"],
    [
      "f1",
      {
        name: "ship",
        start: "g2",
        length: 3,
        hp: 3,
        orientation: "vertical",
      },
      "f3",
      "f4",
      "f5",
      "f6",
      "f7",
      "f8",
      "f9",
      "f10",
    ],
    [
      "g1",
      {
        name: "ship",
        start: "g2",
        length: 3,
        hp: 3,
        orientation: "vertical",
      },
      "g3",
      "g4",
      "g5",
      "g6",
      "g7",
      "g8",
      "g9",
      "g10",
    ],
    [
      "h1",
      {
        name: "ship",
        start: "g2",
        length: 3,
        hp: 3,
        orientation: "vertical",
      },
      "h3",
      "h4",
      "h5",
      "h6",
      "h7",
      "h8",
      "h9",
      "h10",
    ],
    ["i1", "i2", "i3", "i4", "i5", "i6", "i7", "i8", "i9", "i10"],
    ["j1", "j2", "j3", "j4", "j5", "j6", "j7", "j8", "j9", "j10"],
  ]);
});

test("gameboard function with high co-ordinates horizontal", () => {
  let ship2 = new logic.ships("ship2", logic.field[6][6], 3, "horizontal");
  let variable = ship2;

  let gameboard2 = new logic.gameboard();
  gameboard2.gameboardPosition(ship2, gameboard2);

  expect(gameboard2.gameboardPosition(ship2, gameboard2)).toEqual([
    ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "a10"],
    ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "b10"],
    ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10"],
    ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10"],
    ["d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "d10"],
    ["e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "e10"],
    [
      "f1",
      "f2",
      "f3",
      "f4",
      "f5",
      {
        name: "ship2",
        start: "f7",
        length: 3,
        hp: 3,
        orientation: "horizontal",
      },
      {
        name: "ship2",
        start: "f7",
        length: 3,
        hp: 3,
        orientation: "horizontal",
      },
      {
        name: "ship2",
        start: "f7",
        length: 3,
        hp: 3,
        orientation: "horizontal",
      },
      "f9",
      "f10",
    ],
    ["g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8", "g9", "g10"],
    ["h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8", "h9", "h10"],
    ["i1", "i2", "i3", "i4", "i5", "i6", "i7", "i8", "i9", "i10"],
    ["j1", "j2", "j3", "j4", "j5", "j6", "j7", "j8", "j9", "j10"],
  ]);
});
