let field = [
  ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "a10"],
  ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "b10"],
  ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10"],
  ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10"],
  ["d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "d10"],
  ["e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "e10"],
  ["f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "f10"],
  ["g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8", "g9", "g10"],
  ["h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8", "h9", "h10"],
  ["i1", "i2", "i3", "i4", "i5", "i6", "i7", "i8", "i9", "i10"],
  ["j1", "j2", "j3", "j4", "j5", "j6", "j7", "j8", "j9", "j10"],
];
class ships {
  constructor(name, start, length, orientation) {
    this.name = name;
    this.start = start;
    this.length = length;
    this.hp = length;
    this.orientation = orientation;
  }

  hit() {
    let hp = this.hp;
    if (hp.length === 0) {
      this.sink();
    }
    console.log(hp);
    console.log(this.hp);
    let health = 0;

    let hurt = hp.shift();

    hp.forEach((element) => {
      element;

      health++;
    });
    console.log(hp);
    console.log(health);
    return health;
  }

  sunk() {
    return "ship has sunk"; /// figure this out later
  }
}

class gameboard {
  constructor() {
    this.board = [
      ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "a10"],
      ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "b10"],
      ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10"],
      ["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10"],
      ["d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "d10"],
      ["e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "e10"],
      ["f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "f10"],
      ["g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8", "g9", "g10"],
      ["h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8", "h9", "h10"],
      ["i1", "i2", "i3", "i4", "i5", "i6", "i7", "i8", "i9", "i10"],
      ["j1", "j2", "j3", "j4", "j5", "j6", "j7", "j8", "j9", "j10"],
    ];
  }

  gameboardPosition(ship, gameboard) {
    let board = gameboard.board;
    let variable = ship;

    let length = variable.length;
    let orientation = variable.orientation;
    let start = variable.start;
    let name = variable.name;

    let split = start.split("");

    let row = split[0];
    let column = split[1];

    let finalRow = row.toUpperCase();
    let ans = finalRow.charCodeAt() - 65;
    console.log("Answer:", ans);
    console.log("Length:", length);

    if (orientation === "vertical") {
      for (let i = ans; i <= length; i++) {
        /// places it vertically
        board[i][column - 1] = variable;
        console.log("For Name:", variable);
        console.log("I:", i);
        console.log("Board:", board);
      }
    } else if (variable.orientation === "horizontal") {
      for (let i = ans; i <= length; i++) {
        /// places it horizontally
        board[ans][i] = variable;
        console.log("For Name:", variable);
        console.log("I:", i);
        console.log("Board:", board);
      }
    } else {
      return "Error orientation is incorrect";
    }
    console.log(board);
    return board;
    // for (let index = 0; index < array.length; index++) {
    //   ///place ships based on ship length
    // }
    // let arr = this.coordinates;
    // console.log(arr);
    // let split = arr.split("");
    // console.log(split);
    // let row = split[0];

    // let column = split[1];
    // let finalRow = row.toUpperCase();
    // let ans = finalRow.charCodeAt() - 65;
    // console.log(ans);

    // // if (this.orientation === "vertical") {
    //   for (let i = ans; i <= this.length; i++) {
    //     /// places it vertically
    //     field[i][column - 1] = this.id;
    //     console.log(i);
    //   }
    // // } else if (this.orientation === "horizontal") {
    //   for (let i = ans; i <= this.length; i++) {
    //     /// places it horizontally
    //     field[ans][i] = this.id;
    //     console.log(i);
    //   }
    // } else {
    //   return "Error orientation is incorrect";
    // }
  }

  recieveAttack() {}
}

export { field, ships, gameboard };
