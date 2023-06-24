"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Worker = void 0;
var UserName_1 = require("./UserName");
var Worker = /** @class */ (function (_super) {
    __extends(Worker, _super);
    function Worker(name, state, age, city) {
        return _super.call(this, name, state, age, city) || this;
    }
    Worker.prototype.doesTask = function () {
        console.log("Lets get this Job done!");
    };
    return Worker;
}(UserName_1.userName));
exports.Worker = Worker;
;
