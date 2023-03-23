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
    function Phone(model, os) {
        this.model = model;
        this.os = os;
    }
    Phone.prototype.getInfo = function () {
        console.log("Model: ".concat(this.model, ", os: ").concat(this.os));
    };
    return Phone;
}());
var ApplePhone = /** @class */ (function (_super) {
    __extends(ApplePhone, _super);
    function ApplePhone(name) {
        return _super.call(this, name, 'iOS') || this;
    }
    return ApplePhone;
}(Phone));
var XiaomiPhone = /** @class */ (function (_super) {
    __extends(XiaomiPhone, _super);
    function XiaomiPhone(name) {
        return _super.call(this, name, 'Android') || this;
    }
    return XiaomiPhone;
}(Phone));
var PhoneFactory = /** @class */ (function () {
    function PhoneFactory() {
    }
    PhoneFactory.prototype.create = function (phone, name) {
        if (phone === 'apple') {
            return new ApplePhone(name);
        }
        else if (phone === 'xiaomi') {
            return new XiaomiPhone(name);
        }
        else {
            console.log('Invalid phone brand!');
            return undefined;
        }
    };
    return PhoneFactory;
}());
var phoneFactory = new PhoneFactory();
var iPhone12 = phoneFactory.create('apple', 'iPhone12');
var xiaomiRedmi12 = phoneFactory.create('xiaomi', 'Redmi12');
if (iPhone12) {
    iPhone12.getInfo();
}
if (xiaomiRedmi12) {
    xiaomiRedmi12.getInfo();
}
