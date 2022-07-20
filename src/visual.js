let playerBoard = document.querySelector(".playerArray");
let computerBoard = document.querySelector(".computerArray");

function displayBoard(player, computer) {
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
      } else {
        let div = document.createElement("div");
        div.textContent = i;
        playerBoard.append(div);
      }
    });
  });
  let m = 0;
  computer.forEach((element) => {
    for (let k = 0; k < element.length; k++) {
      console.log("Element k", element[k]);
      if (typeof element[k] !== "string") {
        let name = element[k].name;
        let div = document.createElement("div");
        div.textContent = name;
        computerBoard.append(div);
        div.dataset.cell = arr[m];
        m++;
      } else {
        let div = document.createElement("div");
        div.textContent = element[k];
        computerBoard.append(div);
        div.dataset.cell = arr[m];
        m++;
      }
    }
  });
}

export { displayBoard };
