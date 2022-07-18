let playerBoard = document.querySelector(".playerArray");
let computerBoard = document.querySelector(".computerArray");

function displayBoard(player, computer) {
  player.forEach((element) => {
    element.forEach((i) => {
      if (typeof i !== "string") {
        let name = i.name;
        let div = document.createElement("div");
        div.classList.add(name);
        div.textContent = name;
        playerBoard.append(div);
      } else {
        let div = document.createElement("div");
        div.classList.add(i);
        div.textContent = i;
        playerBoard.append(div);
      }
    });
  });

  computer.forEach((element) => {
    element.forEach((i) => {
      if (typeof i !== "string") {
        let name = i.name;
        let div = document.createElement("div");
        div.classList.add(name);
        div.textContent = name;
        computerBoard.append(div);
      } else {
        let div = document.createElement("div");
        div.classList.add(i);
        div.textContent = i;
        computerBoard.append(div);
      }
    });
  });
}

export { displayBoard };
