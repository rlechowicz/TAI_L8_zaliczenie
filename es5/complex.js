var Complex = /** @class */ (function () {
    function Complex(real, imag) {
        this.real = real;
        this.imag = imag;
    }
    Complex.prototype.plus = function (b) {
        var a = this;
        var real = a.real + b.real;
        var imag = a.imag + b.imag;
        return new Complex(real, imag);
    };
    Complex.prototype.minus = function (b) {
        var a = this;
        var real = a.real - b.real;
        var imag = a.imag - b.imag;
        return new Complex(real, imag);
    };
    Complex.prototype.modulus = function () {
        return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imag, 2));
    };
    Complex.prototype.show = function () {
        var symbol = "";
        var res = "";
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
    };
    return Complex;
}());
var x = new Complex(2, 5);
var y = new Complex(6, -3);
console.log("x: " + x.show());
console.log("y: " + y.show());
console.log("|x|: " + x.modulus());
console.log("|y|: " + y.modulus());
console.log("x+y: " + x.plus(y).show());
console.log("x-y: " + x.minus(y).show());
