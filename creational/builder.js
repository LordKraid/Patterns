var OrderBuilder = /** @class */ (function () {
    function OrderBuilder() {
        this.order = {};
    }
    OrderBuilder.prototype.addPackage = function () {
        this.order.package = true;
        return this;
    };
    OrderBuilder.prototype.addBox = function (type) {
        this.order.box = type;
        return this;
    };
    OrderBuilder.prototype.addPayment = function (count) {
        this.order.payment = count;
        return this;
    };
    OrderBuilder.prototype.build = function () {
        return this.order;
    };
    return OrderBuilder;
}());
var order = new OrderBuilder()
    .addPackage()
    .addBox('large')
    .addPayment(2500)
    .build();
console.log(order);
