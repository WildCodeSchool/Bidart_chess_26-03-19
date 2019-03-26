const chessboardGenerator = (nbCase) => {
    let board = []
    let firstColorLine = true;
    let color;
    for (let j = 0; j < nbCase; j++) {
        let row = [];
        color = firstColorLine;

        for (let i = 0; i < nbCase; i++) {
            if (color == true) {
                row.push("white");
            }
            else {
                row.push("black");
            }
            color = !color;
        }
        board.push(row);
        firstColorLine = !firstColorLine;
    }
    return board;

}


console.log(chessboardGenerator(3));
