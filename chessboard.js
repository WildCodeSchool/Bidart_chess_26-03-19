/*Write a function chessboardGenerator which receive an integer side. 
The integer represent the number of squares the chessboard must have on each side.
The function must return a chessboard as an array. This array contain as much arrays as you have rows in the chessboard. 
And those arrays contain as much values as you have squares in a row. the value is the string 'white' or 'black' depending on the color of the square.
(The chessboard always starts with a white square)

exemple : if side equals 2, the function chessboardGenerator will return [['white', 'black'],['black', 'white']] if side equals 3,
the function chessboardGenerator will return [['white', 'black', 'white'], ['black', 'white', 'black'], ['white', 'black', 'white'],]*/

function chessboardGenerator (number) {
    let arrCol = [];
    for (let j = 0; j < number; j++) {
        let start
        let end
        let arrLine = [];
        if (j%2) {
            start='white' 
            end = 'black'
        } else {
            start='black' 
            end = 'white'
        }
        for (let i=0; i < number; i++) {
            i%2 ? arrLine.push(start) : arrLine.push(end) ;
        }
        arrCol.push(arrLine)
    }
    return arrCol;
}
console.log(chessboardGenerator(3));