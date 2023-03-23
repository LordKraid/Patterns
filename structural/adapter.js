var Phone = /** @class */ (function () {
    function Phone(model, manufacturer) {
        this.model = model;
        this.manufacturer = manufacturer;
    }
    Phone.prototype.getModel = function () {
        return this.model;
    };
    Phone.prototype.getManufacturer = function () {
        return this.manufacturer;
    };
    return Phone;
}());
var PhoneAdapter = /** @class */ (function () {
    function PhoneAdapter(phone) {
        this.phone = phone;
    }
    PhoneAdapter.prototype.getName = function () {
        return this.phone.getModel();
    };
    PhoneAdapter.prototype.getBrand = function () {
        return this.phone.getManufacturer();
    };
    return PhoneAdapter;
}());
var phone = new Phone('iPhone', 'Apple');
var phoneAdapter = new PhoneAdapter(phone);
console.log(phoneAdapter.getName());
console.log(phoneAdapter.getBrand());
