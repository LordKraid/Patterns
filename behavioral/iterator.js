var PhoneCollection = /** @class */ (function () {
    function PhoneCollection() {
        this.phones = [];
    }
    PhoneCollection.prototype.addPhone = function (phone) {
        this.phones.push(phone);
    };
    PhoneCollection.prototype.removePhone = function (phone) {
        var phoneIndex = this.phones.indexOf(phone);
        if (phoneIndex >= 0) {
            this.phones.splice(phoneIndex, 1);
        }
    };
    PhoneCollection.prototype.createIterator = function () {
        return new PhoneIterator(this.phones);
    };
    return PhoneCollection;
}());
var PhoneIterator = /** @class */ (function () {
    function PhoneIterator(phones) {
        this.phones = phones;
        this.currentIndex = 0;
    }
    PhoneIterator.prototype.hasNext = function () {
        return this.currentIndex < this.phones.length;
    };
    PhoneIterator.prototype.next = function () {
        var phone = this.phones[this.currentIndex];
        this.currentIndex++;
        return phone;
    };
    return PhoneIterator;
}());
var phoneCollection = new PhoneCollection();
phoneCollection.addPhone("iPhone");
phoneCollection.addPhone("Samsung");
phoneCollection.addPhone("Oppo");
phoneCollection.addPhone("Xiaomi");
var phoneIterator = phoneCollection.createIterator();
while (phoneIterator.hasNext()) {
    console.log(phoneIterator.next());
}
