"use strict";
function tabliczka_mnozenia() {
    let row = "";
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            row = row + (i * j) + " ";
        }
        console.log(row);
        row = "";
    }
}
tabliczka_mnozenia();
