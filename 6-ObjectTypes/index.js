function showProductDetails(product) {
    console.log("O nome do produto \u00E9: ".concat(product.name, " e seu pre\u00E7o \u00E9 R$").concat(product.price));
    if (product.isAvailable) {
        console.log("O produto está disponivel");
    }
}
var shirt = {
    name: "Camisa",
    price: 19.99,
    isAvailable: true
};
showProductDetails(shirt);
function showDetails(user) {
    console.log("O usu\u00E1rio tem o e-mail: ".concat(user.email));
    if (user.role) {
        console.log("A fun\u00E7\u00E3o do usu\u00E9rio \u00E9: ".concat(user.role));
    }
}
var u1 = { email: "kened@email.com", role: "admin" };
var u2 = { email: "kened@email.com", role: "admin" };
showDetails(u1);
showDetails(u2);
var fusca = {
    brand: "VW",
    wheels: 4
};
console.log(fusca);
var coords = {
    x: 20
};
coords.y = 15;
var matheus = {
    name: "Kened",
    age: 30
};
var goku = {
    name: "Goku",
    age: 50,
    superpowers: ["Kamehameha", "Genki Dama"]
};
console.log(goku);
console.log(goku.superpowers);
var arnold = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12
};
console.log(arnold);
console.log(arnold.caliber);
//7 - readyonly array
var myArray = ["Maça", "Laranja", "Banana"];
//myArray[3] = "Mamão"
console.log(myArray);
myArray.forEach(function (item) {
    console.log('Fruta: ' + item);
});
myArray = myArray.map(function (item) {
    return "Fruta: ".concat(item);
});
console.log(myArray);
var myNumberArray = [1, 2, 3, 4, 5];
var myNumberArray2 = [6, 7, 8, 9, 10];
var anotherUser = ["Kened", 30];
console.log(anotherUser[0]);
anotherUser[0] = "João";
console.log(anotherUser[0]);
//9 - Tuplas com readonly
function showNumbers(numbers) {
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
