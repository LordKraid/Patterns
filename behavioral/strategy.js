var Phone = /** @class */ (function () {
    function Phone(model, brand, price) {
        this.model = model;
        this.brand = brand;
        this.price = price;
        this.callStrategy = null;
    }
    Phone.prototype.setCallStrategy = function (callStrategy) {
        this.callStrategy = callStrategy;
    };
    Phone.prototype.call = function (number) {
        if (!this.callStrategy) {
            throw new Error('Call strategy not set.');
        }
        return this.callStrategy.call(number);
    };
    return Phone;
}());
var InternationalCall = /** @class */ (function () {
    function InternationalCall() {
    }
    InternationalCall.prototype.call = function (number) {
        return "Calling ".concat(number, " from ").concat(this.brand, " ").concat(this.model, " at international rate.");
    };
    return InternationalCall;
}());
var LocalCall = /** @class */ (function () {
    function LocalCall() {
    }
    LocalCall.prototype.call = function (number) {
        return "Calling ".concat(number, " from ").concat(this.brand, " ").concat(this.model, " at local rate.");
    };
    return LocalCall;
}());
// Пример использования:
var iPhone = new Phone('iPhone 13', 'Apple', 999);
var internationalCall = new InternationalCall();
var localCall = new LocalCall();
iPhone.setCallStrategy(internationalCall);
console.log(iPhone.call('+1234567890')); // Вывод: "Calling +1234567890 from Apple iPhone 13 at international rate."
iPhone.setCallStrategy(localCall);
console.log(iPhone.call('123-456-7890')); // Вывод: "Calling 123-456-7890 from Apple iPhone 13 at local rate."
