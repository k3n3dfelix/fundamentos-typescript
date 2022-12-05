"use strict";
let produto = "Livro";
const preco = 200;
const carro = {
    marca: "Audi",
    portas: 5,
};
function somar(a, b) {
    return a + b;
}
somar(4, 4);
const nintendo = {
    nome: "Nintendo",
    preco: "2000",
};
function transformarPreco(produto) {
    produto.preco = "R$ " + produto.preco;
    return produto;
}
const produtoNovo = transformarPreco(nintendo);
console.log(produtoNovo);
//Exercicios
const text = 'OK, esTOu      NormAlizando    ';
function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}
console.log(normalizarTexto(text));
