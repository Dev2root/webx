/**
 * Simple TypeScript example demonstrating inheritance and interface
 */
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
// Base class implementing the Animal interface
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.makeSound = function () {
        console.log(this.name + " says: Woof!");
    };
    return Dog;
}());
// Derived class extending Dog and adding more functionality
var Labrador = /** @class */ (function (_super) {
    __extends(Labrador, _super);
    function Labrador(name, color) {
        var _this = _super.call(this, name) || this;
        _this.color = color;
        return _this;
    }
    Labrador.prototype.displayInfo = function () {
        console.log("Labrador Name: ".concat(this.name, ", Color: ").concat(this.color));
    };
    return Labrador;
}(Dog));
// Usage example
var myDog = new Labrador("Buddy", "Yellow");
myDog.makeSound(); // Output: Buddy says: Woof!
myDog.displayInfo(); // Output: Labrador Name: Buddy, Color: Yellow
