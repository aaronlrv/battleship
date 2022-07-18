let playerBoard = document.querySelector(".playerArray");
let computerBoard = document.querySelector(".computerArray");

function displayBoard(player, computer) {
  player.forEach((element) => {
    element.forEach((i) => {
      let div = document.createElement("div");
      div.classList.add(i);
      div.textContent = i;
      playerBoard.append(div);
    });
  });

  computer.forEach((i) => {
    i.forEach((j) => {
      let div = document.createElement("div");
      div.classList.add("j");
      div.textContent = j;
      computerBoard.append(div);
    });
  });
}

export { displayBoard };
