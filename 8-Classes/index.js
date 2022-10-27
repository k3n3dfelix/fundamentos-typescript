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
//1 - Campos em classe
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var kened = new User();
console.log(kened);
kened.name = "Kened";
kened.age = 30;
console.log(kened);
//2 - Contructor
var newUser = /** @class */ (function () {
    function newUser(name, age) {
        this.name = name;
        this.age = age;
    }
    return newUser;
}());
var joao = new newUser("Joao", 20);
console.log(joao);
//3 - Campo readonly
var Car = /** @class */ (function () {
    function Car(name) {
        this.wheels = 4;
        this.name = name;
    }
    return Car;
}());
var fusca = new Car("Fusca");
console.log(fusca);
console.log(fusca.wheels);
fusca.name = "Fusca Turbo";
console.log(fusca);
//4 - Herança e Super
var Machine = /** @class */ (function () {
    function Machine(name) {
        this.name = name;
    }
    return Machine;
}());
var trator = new Machine("Trator");
var KillerMachine = /** @class */ (function (_super) {
    __extends(KillerMachine, _super);
    function KillerMachine(name, guns) {
        var _this = _super.call(this, name) || this;
        _this.guns = guns;
        return _this;
    }
    return KillerMachine;
}(Machine));
var destroyer = new KillerMachine("Destroyer", 4);
console.log(trator);
console.log(destroyer);
//5 - Métodos
var Dwarf = /** @class */ (function () {
    function Dwarf(name) {
        this.name = name;
    }
    Dwarf.prototype.greeting = function () {
        console.log("Hey Stranger !");
    };
    return Dwarf;
}());
var jimmy = new Dwarf("Jimmy");
console.log(jimmy);
jimmy.greeting();
//6 - O This
var Truck = /** @class */ (function () {
    function Truck(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    Truck.prototype.showDetails = function () {
        console.log("Caminh\u00E3o do modelo: ".concat(this.model, ", que tem ").concat(this.hp, " cavalos de pot\u00EAncia"));
    };
    return Truck;
}());
var volvo = new Truck("Volvo", 400);
var scania = new Truck("Scania", 500);
volvo.showDetails();
//7 - Getters
var Person = /** @class */ (function () {
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    return Person;
}());
var kenedFelix = new Person("Kened", "Felix");
//console.log(kenedFelix.fullName)
//8 - Setters
var Coords = /** @class */ (function () {
    function Coords() {
    }
    return Coords;
}());
var myCoords = new Coords();
// myCoords.fillX = 15
// myCoords.fillY = 0
console.log(myCoords);
var blogPost = /** @class */ (function () {
    function blogPost(title) {
        this.title = title;
    }
    blogPost.prototype.itemTitle = function () {
        return "O titulo do post \u00E9: ".concat(this.title);
    };
    return blogPost;
}());
var myPost = new blogPost("Hello World");
console.log(myPost.itemTitle());
