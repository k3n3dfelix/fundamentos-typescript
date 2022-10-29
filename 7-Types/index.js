//1 - generics
function showData(arg) {
    return "o dado \u00E9: ".concat(arg);
}
console.log(showData(5));
console.log(showData('testando generic'));
console.log(showData(true));
console.log(showData(['teste']));
//2-Containt em generics
function shoeProductName(obj) {
    return "O nome do produto \u00E9: ".concat(obj.name);
}
var myObj = { name: "Porta", cor: "Branca" };
var otherProduct = { name: "Carro", wheels: 4, engine: 1.0 };
var thirdIbj = { price: 19, category: "Roupa" };
console.log(shoeProductName(myObj));
console.log(shoeProductName(otherProduct));
var myCar = { name: "Fusca", wheels: 4, engine: 1.0, color: "Branco" };
var myPen = { name: "Fusca", wheels: false, engine: false, color: "Branco" };
console.log(myCar);
console.log(myPen);
function showCharName(obj, name) {
    return "".concat(obj[name]);
}
var myChar = {
    name: "Kened",
    age: 30,
    hasDriveLicense: true
};
console.log(showCharName(myChar, "name"));
console.log(showCharName(myChar, "age"));
//console.log(showCharName(myChar, "teste"))
