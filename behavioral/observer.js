var Phone = /** @class */ (function () {
    function Phone() {
        this.observers = [];
        this.battery = 100;
    }
    Phone.prototype.registerObserver = function (o) {
        this.observers.push(o);
    };
    Phone.prototype.removeObserver = function (o) {
        var observerIndex = this.observers.indexOf(o);
        if (observerIndex !== -1) {
            this.observers.splice(observerIndex, 1);
        }
    };
    Phone.prototype.notifyObservers = function () {
        this.observers.forEach(function (observer) { return observer.update(); });
    };
    Phone.prototype.getBattery = function () {
        return this.battery;
    };
    Phone.prototype.setBattery = function (battery) {
        this.battery = battery;
        this.notifyObservers();
    };
    return Phone;
}());
var BatteryIndicator = /** @class */ (function () {
    function BatteryIndicator(phone) {
        this.phone = phone;
        this.phone.registerObserver(this);
    }
    BatteryIndicator.prototype.update = function () {
        var battery = this.phone.getBattery();
        console.log("Battery is now at ".concat(battery, "%"));
    };
    return BatteryIndicator;
}());
var LowBatteryAlert = /** @class */ (function () {
    function LowBatteryAlert(phone) {
        this.phone = phone;
        this.phone.registerObserver(this);
    }
    LowBatteryAlert.prototype.update = function () {
        var battery = this.phone.getBattery();
        if (battery < 10) {
            console.log('Low battery alert!');
        }
    };
    return LowBatteryAlert;
}());
var phone = new Phone();
var batteryIndicator = new BatteryIndicator(phone);
var lowBatteryAlert = new LowBatteryAlert(phone);
phone.setBattery(80);
phone.setBattery(5);
