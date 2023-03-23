var AndroidPhone = /** @class */ (function () {
    function AndroidPhone(model, price) {
        this.model = model;
        this.price = price;
    }
    AndroidPhone.prototype.accept = function (visitor) {
        visitor.visitAndroidPhone(this);
    };
    return AndroidPhone;
}());
var iPhone = /** @class */ (function () {
    function iPhone(model, price) {
        this.model = model;
        this.price = price;
    }
    iPhone.prototype.accept = function (visitor) {
        visitor.visitiPhone(this);
    };
    return iPhone;
}());
var PhonePriceVisitor = /** @class */ (function () {
    function PhonePriceVisitor() {
    }
    PhonePriceVisitor.prototype.visitAndroidPhone = function (androidPhone) {
        console.log("Price of ".concat(androidPhone.model, " is ").concat(androidPhone.price));
    };
    PhonePriceVisitor.prototype.visitiPhone = function (iPhone) {
        console.log("Price of ".concat(iPhone.model, " is ").concat(iPhone.price));
    };
    return PhonePriceVisitor;
}());
var phones = [
    new AndroidPhone("Samsung Galaxy S21", 800),
    new iPhone("iPhone 13", 1000),
    new iPhone("iPhone 12", 700),
    new AndroidPhone("OnePlus 9 Pro", 900)
];
var priceVisitor = new PhonePriceVisitor();
phones.forEach(function (phone) { return phone.accept(priceVisitor); });
