"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userName = void 0;
var userName = /** @class */ (function () {
    function userName(name, state, age, city) {
        this.name = name;
        this.state = state;
        this.age = age;
        this.city = city;
        this.name = name == undefined ? "(Missing Name)" : name;
        this.age = age === undefined ? 0 : age;
        this.state = state === undefined ? "(Missing state)" : state;
        this.city = city === undefined ? "(Missing City)" : city;
        // console.log(`Created a new User named ${this.name
        // } who is ${this.age} and ${this.employeed} he is employeed, plus he stays in ${this.state}`)
        this.welcomePage();
        this.signedOff();
    }
    userName.prototype.welcomePage = function () {
        console.log("Hey welcome ".concat(this.name, ", you are from ").concat(this.state, ", you are ").concat(this.age, " and live in ").concat(this.city));
    };
    userName.prototype.signedOff = function () {
        console.log("".concat(this.name, " who is ").concat(this.age, " years olf from ").concat(this.city, ", ").concat(this.state, " just signed out"));
    };
    Object.defineProperty(userName.prototype, "Age", {
        //////// setters and getters ///////
        set: function (value) {
            this.age = value;
        },
        enumerable: false,
        configurable: true
    });
    return userName;
}());
exports.userName = userName;
