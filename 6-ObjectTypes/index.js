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
//fusca.wheels = 5 ----> não é possivel com o readonly
