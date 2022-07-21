import { player } from "./logic";

let playerBoard = document.querySelector(".playerArray");
let computerBoard = document.querySelector(".computerArray");
let turn = document.querySelector(".turn");

function displayBoard(player, computer) {
  console.log("Player Board", playerBoard);
  let m = 0;
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

  let arr = [];
  field.forEach((element) => {
    element.forEach((i) => {
      arr.push(i);
    });
  });

  console.log("ARray:", arr);
  playerBoard.textContent = "";
  computerBoard.textContent = "";

  player.forEach((element) => {
    element.forEach((i) => {
      if (typeof i !== "string") {
        let name = i.name;
        let div = document.createElement("div");
        div.textContent = name;
        playerBoard.append(div);
        div.style.backgroundColor = "#7391C8";
        div.style.color = "#7391C8";
        div.dataset.cell = arr[m];
        m++;
      } else {
        if (i === "o") {
          let div = document.createElement("div");
          div.textContent = i;
          div.style.backgroundColor = " #A2C4E0";
          div.style.color = "#A2C4E0";
          playerBoard.append(div);
          div.dataset.cell = arr[m];
          m++;
        } else if (i === "x") {
          let div = document.createElement("div");
          div.textContent = i;
          div.style.backgroundColor = "#BDC6D9";
          div.style.color = "#BDC6D9";
          playerBoard.append(div);
          div.dataset.cell = arr[m];
          m++;
        } else {
          let div = document.createElement("div");
          div.textContent = i;
          div.style.backgroundColor = " #52688f";
          div.style.color = "#52688f";
          playerBoard.append(div);
          div.dataset.cell = arr[m];
          m++;
        }
      }
    });
  });

  m = 0;
  computer.forEach((element) => {
    for (let k = 0; k < element.length; k++) {
      if (element[k] === "o") {
        let div = document.createElement("div");
        div.textContent = element[k];
        computerBoard.append(div);
        div.style.backgroundColor = " #A2C4E0";
        div.style.color = "#A2C4E0";
        div.dataset.cell = arr[m];
        m++;
      } else if (element[k] === "x") {
        let div = document.createElement("div");
        div.textContent = element[k];
        div.style.backgroundColor = "#BDC6D9";
        div.style.color = "#BDC6D9";
        computerBoard.append(div);
        div.dataset.cell = arr[m];
        m++;
      } else {
        let div = document.createElement("div");
        div.textContent = element[k];
        computerBoard.append(div);
        div.style.backgroundColor = " #52688f";
        div.style.color = "#52688f";
        div.dataset.cell = arr[m];
        m++;
      }
    }
  });
}

function hover(gameboard, counter) {
  let arr = [];
  let length = counter;
  if (length < 2) {
    return;
  }
  console.log(length < 2);
  console.log("Length:", length);

  let board = gameboard.board;
  playerBoard.addEventListener("mouseover", (e) => {
    arr.forEach((element) => {
      element.style.backgroundColor = " #52688f";
      element.style.color = " #52688f";
    });

    let orientation = document.querySelector(".btn").textContent;
    let start = e.target.dataset.cell;

    let split = start.split("");

    let row = split[0];
    let column = Number(split[1]);

    let finalRow = row.toUpperCase();
    let ans = finalRow.charCodeAt() - 65;

    if (orientation === "vertical") {
      for (let m = 0; m < length; m++) {
        let j = ans;
        let col = Number(column);

        Array.from(playerBoard.children).forEach((i) => {
          if (i.dataset.cell === board[j][col - 1]) {
            i.style.backgroundColor = "#F7CB2D";
            i.style.color = "#F7CB2D";

            arr.push(i);
          }
        });

        ans++;
      }
    }

    if (orientation === "horizontal") {
      for (let m = 0; m < length; m++) {
        let j = ans;

        Array.from(playerBoard.children).forEach((i) => {
          if (i.dataset.cell === board[j][column - 1]) {
            i.style.backgroundColor = "#F7CB2D";
            i.style.color = "#F7CB2D";

            arr.push(i);
          }
        });
        column++;
      }
    }
    // let cellTarget = e.target;
    // let cell = cellTarget.dataset.cell;
    // console.log(cell);
  });
  console.log(length);
}

export { displayBoard, hover };
