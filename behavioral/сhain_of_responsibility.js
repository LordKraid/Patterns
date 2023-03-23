var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var SupportHandler = /** @class */ (function () {
    function SupportHandler() {
        this.nextHandler = null;
    }
    SupportHandler.prototype.setNextHandler = function (handler) {
        this.nextHandler = handler;
    };
    SupportHandler.prototype.handleRequest = function (request) {
        if (this.nextHandler) {
            return this.nextHandler.handleRequest(request);
        }
        return null;
    };
    return SupportHandler;
}());
var SimpleRequestHandler = /** @class */ (function (_super) {
    __extends(SimpleRequestHandler, _super);
    function SimpleRequestHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SimpleRequestHandler.prototype.handleRequest = function (request) {
        if (request.type === 'simple') {
            console.log('Простой запрос обрабатывается');
            return true;
        }
        else {
            return _super.prototype.handleRequest.call(this, request);
        }
    };
    return SimpleRequestHandler;
}(SupportHandler));
var ComplexRequestHandler = /** @class */ (function (_super) {
    __extends(ComplexRequestHandler, _super);
    function ComplexRequestHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComplexRequestHandler.prototype.handleRequest = function (request) {
        if (request.type === 'complex') {
            console.log('Сложный запрос обрабатывается');
            return true;
        }
        else {
            return _super.prototype.handleRequest.call(this, request);
        }
    };
    return ComplexRequestHandler;
}(SupportHandler));
var UrgentRequestHandler = /** @class */ (function (_super) {
    __extends(UrgentRequestHandler, _super);
    function UrgentRequestHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UrgentRequestHandler.prototype.handleRequest = function (request) {
        if (request.priority === 'urgent') {
            console.log('Срочный запрос обрабатывается');
            return true;
        }
        else {
            return _super.prototype.handleRequest.call(this, request);
        }
    };
    return UrgentRequestHandler;
}(SupportHandler));
var simpleHandler = new SimpleRequestHandler();
var complexHandler = new ComplexRequestHandler();
var urgentHandler = new UrgentRequestHandler();
simpleHandler.setNextHandler(complexHandler);
complexHandler.setNextHandler(urgentHandler);
simpleHandler.handleRequest({ type: 'simple', priority: 'normal' });
simpleHandler.handleRequest({ type: 'complex', priority: 'normal' });
simpleHandler.handleRequest({ type: 'simple', priority: 'urgent' });
