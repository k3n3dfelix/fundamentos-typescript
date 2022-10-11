//1 - Arrays -Sintaxe Nova
var numbers = [1, 2, 3,];
numbers.push(4);
console.log(numbers[2]);
var nomes = ["Kened", "Felix"];
//2 - Outra Sintaxe Array (antiga)
var nums = [100, 200];
nums.push(300);
console.log(nums);
//3 - Any
var arr = [1, "teste", true, [], { nome: "Kened" }];
console.log(arr);
arr.push([1, 2, 3]);
console.log(arr);
//4 -parametros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
//5 - Tipando o Retorno de função
function greeting(name) {
    return "Ol\u00E1 ".concat(name);
}
console.log(greeting('Kened'));
//6 - Funções Anonimas
setTimeout(function () {
    var sallary = 1000;
    //console.log(parseFloat(sallary))
}, 2000);
//7 - Tipos de objeto
function passCordinates(coord) {
    console.log('X coordinates: ' + coord.x);
    console.log('Y coordinates: ' + coord.y);
}
var objCoord = { x: 239, y: 84.2 };
passCordinates(objCoord);
//8 - Props opcionais
function showNumbers(a, b, c) {
    console.log('A: ' + a);
    console.log('B: ' + b);
    if (c) {
        console.log('C: ' + c);
    }
}
showNumbers(1, 2);
//9 - VAlidando argumento opcional
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return "Ol\u00E1, ".concat(firstName, " ").concat(lastName, ",tudo bem?");
    }
    return "Ol\u00E1 ".concat(firstName);
}
console.log(advancedGreeting("Kened", "Felix"));
console.log(advancedGreeting("Kened"));
//10 - Union type
function showBalance(balance) {
    console.log("O saldo da conta \u00E9 R$".concat(balance));
}
showBalance(100);
showBalance('500');
//11 - Avançando em UnionTypes
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuario não aprovado!";
    }
    return "a fun\u00E7\u00E3o do usu\u00E1rio \u00E9: ".concat(role);
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
function showId(id) {
    console.log("O ID \u00E9: ".concat(id));
}
showId(1);
showId("200");
function showCoords(obj) {
    console.log("X:".concat(obj.x, " Y:").concat(obj.y, " Z:").concat(obj.z));
}
var coordObj = {
    x: 10,
    y: 15,
    z: 20
};
showCoords(coordObj);
