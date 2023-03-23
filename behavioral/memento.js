var Phone = /** @class */ (function () {
    function Phone(model, color, memory) {
        this.model = model;
        this.color = color;
        this.memory = memory;
    }
    Phone.prototype.saveState = function () {
        return new PhoneMemento(this.model, this.color, this.memory);
    };
    Phone.prototype.restoreState = function (memento) {
        this.model = memento.model;
        this.color = memento.color;
        this.memory = memento.memory;
    };
    return Phone;
}());
var PhoneMemento = /** @class */ (function () {
    function PhoneMemento(model, color, memory) {
        this.model = model;
        this.color = color;
        this.memory = memory;
    }
    return PhoneMemento;
}());
var phone = new Phone("iPhone", "black", "64 GB");
console.log(phone);
var phoneMemento = phone.saveState();
phone.model = "Samsung";
phone.color = "white";
phone.memory = "128 GB";
console.log(phone);
phone.restoreState(phoneMemento);
console.log(phone);
