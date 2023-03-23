var Phone = /** @class */ (function () {
    function Phone(mediator) {
        this.mediator = mediator;
    }
    Phone.prototype.send = function (message, to) {
        console.log("\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \"".concat(message, "\" \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E"));
        this.mediator.notify(this, message, to);
    };
    Phone.prototype.receive = function (message, from) {
        console.log("\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \"".concat(message, "\" \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043E"));
    };
    return Phone;
}());
var Mediator = /** @class */ (function () {
    function Mediator() {
        this.phones = [];
    }
    Mediator.prototype.addPhone = function (phone) {
        this.phones.push(phone);
    };
    Mediator.prototype.notify = function (sender, message, to) {
        this.phones.forEach(function (phone) {
            if (phone !== sender && phone instanceof Phone) {
                phone.receive(message, sender);
            }
        });
    };
    return Mediator;
}());
var mediator = new Mediator();
var phone1 = new Phone(mediator);
var phone2 = new Phone(mediator);
mediator.addPhone(phone1);
mediator.addPhone(phone2);
phone1.send("Привет", phone2);
phone2.send("Как дела?", phone1);
