var Flyweight = /** @class */ (function () {
    function Flyweight() {
        this.resources = {};
    }
    Flyweight.prototype.getResource = function (key) {
        if (this.resources[key]) {
            return this.resources[key];
        }
        else {
            this.resources[key] = "some resource";
            return this.resources[key];
        }
    };
    Flyweight.prototype.getResourcesCount = function () {
        var count = 0;
        for (var key in this.resources) {
            if (this.resources.hasOwnProperty(key)) {
                count++;
            }
        }
        return count;
    };
    return Flyweight;
}());
var flyweight = new Flyweight();
console.log(flyweight.getResource("key1"));
console.log(flyweight.getResource("key1"));
console.log(flyweight.getResourcesCount());
