function tabliczka_mnozenia() {
    var row = "";
    for (var i = 1; i <= 10; i++) {
        for (var j = 1; j <= 10; j++) {
            row = row + (i * j) + " ";
        }
        console.log(row);
        row = "";
    }
}
tabliczka_mnozenia();
