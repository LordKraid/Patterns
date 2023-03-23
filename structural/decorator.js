var Phone = /** @class */ (function () {
    function Phone(brand, model) {
        this.brand = brand;
        this.model = model;
        this.status = 'off';
    }
    Phone.prototype.turnOn = function () {
        this.status = 'on';
        console.log("".concat(this.brand, " ").concat(this.model, " is turned on."));
    };
    Phone.prototype.turnOff = function () {
        this.status = 'off';
        console.log("".concat(this.brand, " ").concat(this.model, " is turned off."));
    };
    Phone.prototype.call = function (number) {
        console.log("Calling ".concat(number, " from ").concat(this.brand, " ").concat(this.model, "."));
    };
    return Phone;
}());
function checkStatus(phone) {
    var callFn = phone.call.bind(phone);
    phone.call = function (number) {
        if (this.status === 'off') {
            console.log("".concat(this.brand, " ").concat(this.model, " is turned off. Cannot make a call."));
        }
        else {
            callFn(number);
        }
    };
    return phone;
}
var phone = new Phone('Apple', 'iPhone 13');
checkStatus(phone);
phone.call('123-456-7890');
phone.turnOn();
phone.call('123-456-7890');
