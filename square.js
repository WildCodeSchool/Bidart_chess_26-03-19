function chessboardGenerator(n) {
  return new Array(n)
    .fill(null)
    .map((_, i) =>
      i % 2 === 0
        ? new Array(n)
            .fill(null)
            .map((_, j) => (j % 2 === 0 ? "white" : "black"))
        : new Array(n)
            .fill(null)
            .map((_, j) => (j % 2 === 0 ? "black" : "white"))
    );
}

// -----------------------------------------------------
//          TEST
// -----------------------------------------------------

function OK(msg = "") {
  console.log("OK pour : ", msg);
}

function KO(msg = "") {
  console.error("Erreur pour : ", msg);
}

function isEq(a, b, err) {
  if (JSON.stringify(a) === JSON.stringify(b)) {
    OK();
  } else {
    KO(err);
  }
}

isEq(
  chessboardGenerator(2),
  [["white", "black"], ["black", "white"]],
  "erreur pour 2"
);
isEq(
  chessboardGenerator(3),
  [
    ["white", "black", "white"],
    ["black", "white", "black"],
    ["white", "black", "white"]
  ],
  "erreur pour 3"
);
