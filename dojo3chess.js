function chessboardGenerator(int) {
    let myStr = "white";
    let myArr = [];
    let mysArr = [];
    for (let i = 0; i < int; i++) {
        for (let j = 0; j < int; j++) {
            mysArr.push(myStr);
            if (myStr === "white") {
                myStr = "black";
            } else {
                myStr = "white";
            }
        }
        myArr.push(mysArr);
        mysArr = [];
    }
    return myArr;
}

console.log(chessboardGenerator(2));
