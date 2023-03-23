var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Phone = /** @class */ (function () {
    function Phone(name, price) {
        this.name = name;
        this.price = price;
    }
    Phone.prototype.displayInfo = function () {
        console.log("Name: ".concat(this.name));
        console.log("Price: ".concat(this.price));
        this.addFeatures();
        console.log('');
    };
    return Phone;
}());
var AndroidPhone = /** @class */ (function (_super) {
    __extends(AndroidPhone, _super);
    function AndroidPhone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AndroidPhone.prototype.addFeatures = function () {
        console.log('Operating system: Android');
        console.log('App store: Google Play');
    };
    return AndroidPhone;
}(Phone));
var iPhone = /** @class */ (function (_super) {
    __extends(iPhone, _super);
    function iPhone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    iPhone.prototype.addFeatures = function () {
        console.log('Operating system: iOS');
        console.log('App store: App Store');
    };
    return iPhone;
}(Phone));
var galaxy = new AndroidPhone('Galaxy S21', 1000);
galaxy.displayInfo();
var iphoneX = new iPhone('iPhone X', 1200);
iphoneX.displayInfo();
