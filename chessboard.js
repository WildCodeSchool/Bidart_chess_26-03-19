/*Write a function chessboardGenerator which receive an integer side.
The integer represent the number of squares the chessboard must have on each side.
The function must return a chessboard as an array. This array contain as much arrays as you have rows in the chessboard.
And those arrays contain as much values as you have squares in a row. the value is the string 'white' or 'black' depending on the color of the square.
(The chessboard always starts with a white square)

exemple : if side equals 2, the function chessboardGenerator will return [['white', 'black'],['black', 'white']] if side equals 3,
the function chessboardGenerator will return [['white', 'black', 'white'], ['black', 'white', 'black'], ['white', 'black', 'white'],]*/

function chessboardGenerator(n) {
  const grid = [];
  const colors = ['white', 'black'];
  for (let j = 0; j < n; j++) {
    const arrRow = [];
    for (let i = 0; i < n; i++) {
      arrRow.push(colors[i % 2]);
    }
    colors.reverse();
    grid.push(arrRow);
  }
  return grid;
}

// TESTS

console.log(chessboardGenerator(2));

if (
  chessboardGenerator(2).toString() == [['white', 'black'], ['black', 'white']]
) {
  console.log('Test Passed for 2');
} else {
  console.log('Test Failed for 2');
}

if (
  chessboardGenerator(3).toString() ==
  [
    ['white', 'black', 'white'],
    ['black', 'white', 'black'],
    ['white', 'black', 'white']
  ]
) {
  console.log('Test Passed for 3');
} else {
  console.log('Test Failed for 3');
}
