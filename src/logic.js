let field = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
];

class ships {
  constructor(name, coordinates, length) {
    this.name = name;
    this.coordinates = coordinates;
    this.length = length;
    this.hp = length;
  }

  hit() {
    if (hp === 0) {
      return "ship has already been sunk";
    } else {
      hp--;
    }
    return length;
  }

  sunk() {
    if (hp === 0) {
      return "ship has sunk";
    }
  }
}

function gameboard() {
  return {};
}

export { field, ships, gameboard };
