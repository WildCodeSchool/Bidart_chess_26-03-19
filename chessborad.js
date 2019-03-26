function chessboardGenerator(x) {
  const row = new Array(x);

  for (i = 0; i < x; i++) {
    let column = new Array(x);
    row[i] = column;
    for (let j = 0; j < x; j++) {
      if ((i + j) % 2 == 0) {
        row[i][j] = "white";
      } else {
        row[i][j] = "black";
      }
    }
  }
  return row;
}
console.log(chessboardGenerator(5));
