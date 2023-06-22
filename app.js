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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var game;
game = "Rugby";
function typeOfGame(game, points) {
    console.log("I could have easily scored ".concat(points, " in my last ").concat(game, " game"));
}
// typeOfGame("soccer", 23);
var a = 1;
var b = "string";
var c = true;
var d = null;
var e = {};
var f = undefined;
var h = "j";
var i = ["billy", 23];
var j = ["23"];
var k = [23, 44];
////////////////////////// Arrow functions ///////////
var aboutMe = function (name, age, career) {
    console.log("My name is ".concat(name, " and I am ").concat(age, "  years old i wonder if i am doing this life thing right, true or false?: ").concat(career));
};
// aboutMe("lokose", 26, true);
//////////////////////////  Promises ///////////
var myFamo = function (fam) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, console.log("Hello, the Natana family has over ".concat(fam, " members and trust me majority of us are not tuned to liking each other!"))];
        });
    });
};
// myFamo(50);
//////////////////////////  Interfaces ///////////
var user = {
    name: "lokose",
    state: "MN",
    age: 26,
    city: "Bloomington"
};
var welcomePage = function (user) {
    console.log("Hey welcome ".concat(user.name, ", you are from ").concat(user.state, ", you are ").concat(user.age, " and live in ").concat(user.city));
};
var userName = /** @class */ (function () {
    function userName(name, state, age, employeed, city) {
        this.name = name;
        this.state = state;
        this.age = age;
        this.employeed = employeed;
        this.city = city;
        this.name = name == undefined ? "(Missing Name)" : name;
        this.age = age === undefined ? 0 : age;
        this.employeed = employeed,
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
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, state, age, city) {
        return _super.call(this, name, state, age, city) || this;
    }
    Manager.prototype.giveOrders = function () {
        console.log("To employee");
    };
    return Manager;
}(userName));
// const userName1 = new userName("lokose", "MN", 26, true, "Bloomington");
var userName2 = new userName("Daniel", "VA", 20, false, "yei");
