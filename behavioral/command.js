var Phone = /** @class */ (function () {
    function Phone(name, price) {
        this.name = name;
        this.price = price;
    }
    Phone.prototype.displayPrice = function () {
        console.log("".concat(this.name, " - $").concat(this.price));
    };
    return Phone;
}());
var PhoneDisplayCommand = /** @class */ (function () {
    function PhoneDisplayCommand(phone) {
        this.phone = phone;
    }
    PhoneDisplayCommand.prototype.execute = function () {
        this.phone.displayPrice();
    };
    return PhoneDisplayCommand;
}());
var PhoneDisplayInvoker = /** @class */ (function () {
    function PhoneDisplayInvoker() {
        this.commands = [];
    }
    PhoneDisplayInvoker.prototype.addCommand = function (command) {
        this.commands.push(command);
    };
    PhoneDisplayInvoker.prototype.executeCommands = function () {
        this.commands.forEach(function (command) { return command.execute(); });
    };
    return PhoneDisplayInvoker;
}());
var iPhone = new Phone('iPhone 13 Pro', 999);
var samsung = new Phone('Samsung Galaxy S21', 799);
var googlePixel = new Phone('Google Pixel 6', 599);
var iPhoneCommand = new PhoneDisplayCommand(iPhone);
var samsungCommand = new PhoneDisplayCommand(samsung);
var googlePixelCommand = new PhoneDisplayCommand(googlePixel);
var displayInvoker = new PhoneDisplayInvoker();
displayInvoker.addCommand(iPhoneCommand);
displayInvoker.addCommand(samsungCommand);
displayInvoker.addCommand(googlePixelCommand);
displayInvoker.executeCommands();
