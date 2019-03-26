/*Write a function chessboardGenerator which receive an integer side.
The integer represent the number of squares the chessboard must have on each side.
The function must return a chessboard as an array. This array contain as much arrays as you have rows in the chessboard.
And those arrays contain as much values as you have squares in a row. the value is the string 'white' or 'black' depending on the color of the square.
(The chessboard always starts with a white square)

exemple : if side equals 2, the function chessboardGenerator will return [['white', 'black'],['black', 'white']] if side equals 3,
the function chessboardGenerator will return [['white', 'black', 'white'], ['black', 'white', 'black'], ['white', 'black', 'white'],]*/

function chessboardGenerator(number) {
  const arrCol = [];
  const color = ['white', 'black'];
  for (let j = 0; j < number; j++) {
    const arrLine = [];
    for (let i = 0; i < number; i++) {
      arrLine.push(color[i % 2]);
    }
    color.reverse();
    arrCol.push(arrLine);
  }
  return arrCol;
}

console.log(chessboardGenerator(5));
