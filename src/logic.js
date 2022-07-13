let field = [
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
  "x",
];

function ships(name, coordinates) {
  return {
    name: name,
    coordinates: [coordinates],
    length() {
      console.log(coordinates);
      ships.coordinates.forEach((element) => {
        let lengthValue = 0;
        length++;
        length: lengthValue;
        console.log(length);
      });
    },
  };
}

export { field, ships };
