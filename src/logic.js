let field = [
  ["a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "a10"],
  ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "b10"],
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
    if (hp === 0) {
      this.sink();
    } else {
      hp--;
    }
    console.log(hp);
    return hp;
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
    console.log("Board:", board);
    let variable = ship;

    let length = variable.length;
    let orientation = variable.orientation;
    let start = variable.start;
    let name = variable.name;

    let split = start.split("");
    console.log("Split:", split);

    let row = split[0];
    let column = +split[1];
    console.log(typeof column);

    console.log("Row:", row);
    console.log("Column:", column);

    let finalRow = row.toUpperCase();
    let ans = finalRow.charCodeAt() - 65;
    console.log("Answer:", ans);

    // if (
    //   typeof board[ans][column] === "string" &&
    //   typeof board[ans - 1][column - 1] === "string" &&
    //   typeof board[ans + 1][column + 1] === "string" &&
    //   typeof board[ans][column + 1] === "string" &&
    //   typeof board[ans + 1][column] === "string" &&
    //   typeof [ans - 1][column] === "string" &&
    //   board[ans][column - 1] === "string" &&
    //   typeof board[ans + 1][column - 1] === "string"
    // ) {
    //   console.log("this works");
    // } else {
    //   console.log("youre wrong!");
    // }

    if (orientation === "vertical") {
      let answer = Number(ans);

      for (let i = 0; i < 1; i++) {
        console.log("I:", i);
        /// vertical
        if (typeof board[answer + i][column] === "string") {
          ////
          console.log("the coast is clear!");
          let counter = ans;
          for (let k = 0; k < length; k++) {
            if (counter === 10) {
              return;
            } else {
              console.log("Counter:", counter);
              counter++;
            }
            // try {
            //   board[j][col - 1] = variable;
            // } catch (e) {
            //   console.log("j was bad");
            //   console.log("J catch:", j);
            //   console.log(board);
            //   console.log(board[j]);
            // }
          }
          for (let m = 0; m < length; m++) {
            console.log("Length:", length);
            console.log("M:", m);
            let j = ans;
            let col = Number(column);
            console.log(col);

            try {
              board[j][col - 1] = variable;
            } catch (e) {
              console.log("j was bad");
              console.log("J catch:", j);
              console.log(board);
              console.log(board[j]);
            }
            board[j][col - 1] = variable;
            ans++;
          }
        }
      }
      /// places vertically

      // for every loop
      // it assigns ans + 1 (ans being the final row)
      // and then increments the answer to keep increasing the column
      // until the for loop stops because it keeps track of i now
    } else if (variable.orientation === "horizontal") {
      for (let i = 0; i < length; i++) {
        /// horizontal checking
        if (
          typeof board[+ans][column + i] === "string" &&
          typeof board[ans][column - 2] === "string" &&
          typeof board[ans - 1][column - 1] === "string" &&
          typeof board[ans + 1][column - 1] === "string"
        ) {
          let counter = column;
          for (let i = 0; i < length; i++) {
            /// places it horizontally
            if (counter === 11) {
              return;
            } else {
              console.log("Column:", column);
              counter++;
            }
          }
          for (let m = 0; m < length; m++) {
            let j = ans;
            board[j][column - 1] = variable;
            column++;
          }
        }
      }
    } else {
      return "Error orientation is incorrect";
    }
    console.table(board);

    return board;
  }

  recieveAttack(field, board) {
    let gameboard = board.board;
    let attack = field;

    let split = attack.split("");

    let row = split[0];
    let column = split[1];

    let finalRow = row.toUpperCase();

    let ans = finalRow.charCodeAt() - 65;

    let coord = gameboard[ans][column - 1];

    if (typeof coord !== "string") {
      coord.hit(); /// coord references object and calls hit for hp which deducts hp by 1
      gameboard[ans][column - 1] = "o";
    } else if (coord === "x") {
      console.log("INVALID CHOICE");
      return "INVALID CHOICE"; /// return invalid choice as this has already been marked before
    } else {
      gameboard[ans][column - 1] = "x";

      /// considered this hit as its a valid box and change it to x
    }
    console.table(gameboard);
    return gameboard;
  }

  allSunk(board) {
    let gameboard = board.board;
    let arr = [];

    gameboard.forEach((i) => {
      i.forEach((j) => {
        arr.push(j);
      });
    });
    let condition = arr.every((x) => typeof x === "string");
    console.log(condition);

    if (condition === true) {
      return "THE WINNER"; /// figure this out later
    } else {
      return "play on";
    }
  }
  computerGenerate() {
    let row = Math.floor(Math.random() * (10 - 1) + 1);
    let column = Math.floor(Math.random() * (10 - 1) + 1);
    let choice = ["horizontal", "vertical"];
    let min = Math.ceil(0);
    let max = Math.max(2);
    let choiceNum = Math.floor(Math.random() * (max - min) + min);
    let orientation = choice[choiceNum];

    return { row, column, orientation };
    console.log("Choice Num:", choiceNum);
    console.log("Choice:", choice[choiceNum]);
    console.log("Row", row);
    console.log("Column", column);
  }
}

class player {
  constructor(name, attack) {
    this.name = name;
    this.arr = [];
    this.attack = attack;
  }

  computerPlay() {
    let arr = this.arr;
    let row = Math.floor(Math.random() * (10 - 0) + 0);
    let column = Math.floor(Math.random() * (10 - 0) + 0);

    console.log("Computer", row);
    console.log("Computer", column);
    let move = field[row][column];
    console.log("Move", move);

    if (arr.indexOf(move) !== -1) {
      this.computerPlay();
    } else {
      arr.push(move);
      return move;
    }

    console.log(arr);
  }
}

export { field, ships, gameboard, player };
