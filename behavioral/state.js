var LockedPhoneState = /** @class */ (function () {
    function LockedPhoneState() {
    }
    LockedPhoneState.prototype.call = function () {
        console.log("Cannot make a call - phone is locked");
    };
    LockedPhoneState.prototype.text = function () {
        console.log("Cannot send a text - phone is locked");
    };
    return LockedPhoneState;
}());
var UnlockedPhoneState = /** @class */ (function () {
    function UnlockedPhoneState() {
    }
    UnlockedPhoneState.prototype.call = function () {
        console.log("Dialing...");
    };
    UnlockedPhoneState.prototype.text = function () {
        console.log("Sending a text...");
    };
    return UnlockedPhoneState;
}());
var Phone = /** @class */ (function () {
    function Phone() {
        this.state = new LockedPhoneState();
    }
    Phone.prototype.lock = function () {
        console.log("Phone is locked");
        this.state = new LockedPhoneState();
    };
    Phone.prototype.unlock = function () {
        console.log("Phone is unlocked");
        this.state = new UnlockedPhoneState();
    };
    Phone.prototype.call = function () {
        this.state.call();
    };
    Phone.prototype.text = function () {
        this.state.text();
    };
    return Phone;
}());
var phone = new Phone();
phone.call(); // Cannot make a call - phone is locked
phone.text(); // Cannot send a text - phone is locked
phone.unlock(); // Phone is unlocked
phone.call(); // Dialing...
phone.text(); // Sending a text...
phone.lock(); // Phone is locked
phone.call(); // Cannot make a call - phone is locked
phone.text(); // Cannot send a text - phone is locked
