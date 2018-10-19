"use strict";
class Complex {
    constructor(real, imag) {
        this.real = real;
        this.imag = imag;
    }
    plus(b) {
        let a = this;
        let real = a.real + b.real;
        let imag = a.imag + b.imag;
        return new Complex(real, imag);
    }
    minus(b) {
        let a = this;
        let real = a.real - b.real;
        let imag = a.imag - b.imag;
        return new Complex(real, imag);
    }
    modulus() {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imag, 2));
    }
    show() {
        let symbol = "";
        let res = "";
        if (this.imag > 0) {
            res = this.real + "+" + this.imag + "i";
        }
        else if (this.imag < 0) {
            res = this.real + (this.imag + "i");
        }
        else {
            res = this.real + "";
        }
        return res;
    }
}
let x = new Complex(2, 5);
let y = new Complex(6, -3);
console.log("x: " + x.show());
console.log("y: " + y.show());
console.log("|x|: " + x.modulus());
console.log("|y|: " + y.modulus());
console.log("x+y: " + x.plus(y).show());
console.log("x-y: " + x.minus(y).show());
