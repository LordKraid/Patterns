var PhonePrototype = /** @class */ (function () {
    function PhonePrototype(model, os, color) {
        this.model = model;
        this.os = os;
        this.color = color;
    }
    PhonePrototype.prototype.getInfo = function () {
        console.log("Model: ".concat(this.model, ", os: ").concat(this.os, ", color: ").concat(this.color));
    };
    PhonePrototype.prototype.clone = function () {
        return Object.create(this);
    };
    return PhonePrototype;
}());
var iPhone12 = new PhonePrototype('iPhone12', 'iOS', 'red');
iPhone12.getInfo();
var iPhone13 = iPhone12.clone();
iPhone13.model = 'iPhone13';
iPhone13.getInfo();
