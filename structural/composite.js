var PhoneComponent = /** @class */ (function () {
    function PhoneComponent(name, price) {
        this.name = name;
        this.price = price;
    }
    PhoneComponent.prototype.getPrice = function () {
        return this.price;
    };
    PhoneComponent.prototype.getName = function () {
        return this.name;
    };
    return PhoneComponent;
}());
var PhoneModel = /** @class */ (function () {
    function PhoneModel(name) {
        this.name = name;
        this.components = [];
    }
    PhoneModel.prototype.add = function (component) {
        this.components.push(component);
    };
    PhoneModel.prototype.remove = function (component) {
        var componentIndex = this.components.indexOf(component);
        this.components.splice(componentIndex, 1);
    };
    PhoneModel.prototype.getPrice = function () {
        var totalPrice = 0;
        for (var _i = 0, _a = this.components; _i < _a.length; _i++) {
            var component = _a[_i];
            totalPrice += component.getPrice();
        }
        return totalPrice;
    };
    PhoneModel.prototype.getModelName = function () {
        return this.name;
    };
    return PhoneModel;
}());
var PhoneCompany = /** @class */ (function () {
    function PhoneCompany(name) {
        this.name = name;
        this.models = [];
    }
    PhoneCompany.prototype.add = function (model) {
        this.models.push(model);
    };
    PhoneCompany.prototype.remove = function (model) {
        var modelIndex = this.models.indexOf(model);
        this.models.splice(modelIndex, 1);
    };
    PhoneCompany.prototype.getPrice = function () {
        var totalPrice = 0;
        for (var _i = 0, _a = this.models; _i < _a.length; _i++) {
            var model = _a[_i];
            totalPrice += model.getPrice();
        }
        return totalPrice;
    };
    PhoneCompany.prototype.getCompanyName = function () {
        return this.name;
    };
    return PhoneCompany;
}());
var screen = new PhoneComponent("Screen", 100);
var battery = new PhoneComponent("Battery", 50);
var camera = new PhoneComponent("Camera", 80);
var cpu = new PhoneComponent("CPU", 120);
var ram = new PhoneComponent("RAM", 70);
var iphoneX = new PhoneModel("iPhone X");
iphoneX.add(screen);
iphoneX.add(battery);
iphoneX.add(camera);
iphoneX.add(cpu);
iphoneX.add(ram);
var samsungS20 = new PhoneModel("Samsung S20");
samsungS20.add(screen);
samsungS20.add(battery);
samsungS20.add(camera);
samsungS20.add(cpu);
samsungS20.add(ram);
var apple = new PhoneCompany("Apple");
apple.add(iphoneX);
var samsung = new PhoneCompany("Samsung");
samsung.add(samsungS20);
console.log(iphoneX.getModelName() + " price: $" + iphoneX.getPrice());
console.log(samsungS20.getModelName() + " price: $" + samsungS20.getPrice());
console.log(apple.getCompanyName() + " price: $" + apple.getPrice());
console.log(samsung.getCompanyName() + " price: $" + samsung.getPrice());
