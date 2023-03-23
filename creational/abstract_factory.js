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
    function Phone() {
    }
    return Phone;
}());
var PhoneFactory = /** @class */ (function () {
    function PhoneFactory() {
    }
    return PhoneFactory;
}());
var SamsungPhone = /** @class */ (function (_super) {
    __extends(SamsungPhone, _super);
    function SamsungPhone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SamsungPhone.prototype.getBrand = function () {
        return 'Samsung';
    };
    SamsungPhone.prototype.getModel = function () {
        return 'Galaxy S21';
    };
    SamsungPhone.prototype.getOS = function () {
        return 'Android 11';
    };
    return SamsungPhone;
}(Phone));
var ApplePhone = /** @class */ (function (_super) {
    __extends(ApplePhone, _super);
    function ApplePhone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ApplePhone.prototype.getBrand = function () {
        return 'Apple';
    };
    ApplePhone.prototype.getModel = function () {
        return 'iPhone 12';
    };
    ApplePhone.prototype.getOS = function () {
        return 'iOS 14';
    };
    return ApplePhone;
}(Phone));
var SamsungFactory = /** @class */ (function (_super) {
    __extends(SamsungFactory, _super);
    function SamsungFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SamsungFactory.prototype.createPhone = function () {
        return new SamsungPhone();
    };
    return SamsungFactory;
}(PhoneFactory));
var AppleFactory = /** @class */ (function (_super) {
    __extends(AppleFactory, _super);
    function AppleFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppleFactory.prototype.createPhone = function () {
        return new ApplePhone();
    };
    return AppleFactory;
}(PhoneFactory));
var samsungFactory = new SamsungFactory();
var appleFactory = new AppleFactory();
var samsungPhone = samsungFactory.createPhone();
console.log(samsungPhone.getBrand());
console.log(samsungPhone.getModel());
console.log(samsungPhone.getOS());
var applePhone = appleFactory.createPhone();
console.log(applePhone.getBrand());
console.log(applePhone.getModel());
console.log(applePhone.getOS());
