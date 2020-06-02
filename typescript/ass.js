var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(n) {
        var _this = this;
        this.display = function () {
            console.log(_this.name);
        };
        this.getperson = function (n) {
            _this.name = n;
        };
        this.name = n;
    }
    return Person;
}());
var employee = /** @class */ (function (_super) {
    __extends(employee, _super);
    function employee(name, id) {
        var _this = _super.call(this, name) || this;
        _this.id = id;
        return _this;
    }
    return employee;
}(Person));
var emp = new employee("vk", 1);
emp.display();
