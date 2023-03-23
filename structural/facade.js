var Phone = /** @class */ (function () {
    function Phone() {
        this.powerOn = false;
        this.currentApp = null;
        this.currentCall = null;
    }
    Phone.prototype.turnOn = function () {
        this.powerOn = true;
        console.log("Phone turned on.");
    };
    Phone.prototype.turnOff = function () {
        this.powerOn = false;
        console.log("Phone turned off.");
    };
    Phone.prototype.makeCall = function (number) {
        if (this.powerOn) {
            this.currentCall = number;
            console.log("Calling", number);
        }
        else {
            console.log("Phone is off.");
        }
    };
    Phone.prototype.sendMessage = function (number, message) {
        if (this.powerOn) {
            console.log("Sending message to", number, ":", message);
        }
        else {
            console.log("Phone is off.");
        }
    };
    Phone.prototype.openApp = function (appName) {
        if (this.powerOn) {
            this.currentApp = appName;
            console.log("Opened", appName, "app.");
        }
        else {
            console.log("Phone is off.");
        }
    };
    return Phone;
}());
var PhoneFacade = /** @class */ (function () {
    function PhoneFacade(phone) {
        this.phone = phone;
    }
    PhoneFacade.prototype.turnOn = function () {
        this.phone.turnOn();
        console.log("Welcome to your phone!");
    };
    PhoneFacade.prototype.turnOff = function () {
        this.phone.turnOff();
    };
    PhoneFacade.prototype.makeCall = function (number) {
        this.phone.makeCall(number);
    };
    PhoneFacade.prototype.sendMessage = function (number, message) {
        this.phone.sendMessage(number, message);
    };
    PhoneFacade.prototype.openApp = function (appName) {
        this.phone.openApp(appName);
    };
    return PhoneFacade;
}());
var phone = new Phone();
var phoneFacade = new PhoneFacade(phone);
phoneFacade.turnOn();
phoneFacade.makeCall("123-456-7890");
phoneFacade.sendMessage("123-456-7890", "Привет! Как дела?");
phoneFacade.openApp("Камера");
phoneFacade.turnOff();
