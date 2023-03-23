var Phone = /** @class */ (function () {
    function Phone(model, os) {
        this.model = model;
        this.os = os;
    }
    Phone.prototype.call = function (number) {
        this.os.call(number);
    };
    Phone.prototype.sendMessage = function (number, message) {
        this.os.sendMessage(number, message);
    };
    return Phone;
}());
var Android = /** @class */ (function () {
    function Android() {
    }
    Android.prototype.call = function (number) {
        console.log("\u0412\u044B\u0437\u044B\u0432\u0430\u0435\u043C \u043D\u043E\u043C\u0435\u0440 ".concat(number, " \u043D\u0430 Android"));
    };
    Android.prototype.sendMessage = function (number, message) {
        console.log("\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u043C \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \"".concat(message, "\" \u043D\u0430 \u043D\u043E\u043C\u0435\u0440 ").concat(number, " \u0447\u0435\u0440\u0435\u0437 Android"));
    };
    return Android;
}());
var IOS = /** @class */ (function () {
    function IOS() {
    }
    IOS.prototype.call = function (number) {
        console.log("\u0412\u044B\u0437\u044B\u0432\u0430\u0435\u043C \u043D\u043E\u043C\u0435\u0440 ".concat(number, " \u043D\u0430 iOS"));
    };
    IOS.prototype.sendMessage = function (number, message) {
        console.log("\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u043C \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \"".concat(message, "\" \u043D\u0430 \u043D\u043E\u043C\u0435\u0440 ").concat(number, " \u0447\u0435\u0440\u0435\u0437 iOS"));
    };
    return IOS;
}());
var androidPhone = new Phone('Xiaomi', new Android());
androidPhone.call('123-45-67');
androidPhone.sendMessage('123-45-67', 'Привет, как дела?');
var iosPhone = new Phone('iPhone', new IOS());
iosPhone.call('123-45-67');
iosPhone.sendMessage('123-45-67', 'Привет, как дела?');
