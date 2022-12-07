"use strict";
let total = 20;
total = "30";
function preencherDados(dados) {
    document.body.innerHTML += `
    <div>
      <h2>${dados.nome}<h2>
      <p>${dados.preco}<p>
      <h2>Inclui teclado: ${dados.teclado ? 'Sim' : 'não'}<h2>
    </div>
  `;
}
const computador = {
    nome: "Computador",
    preco: 2000,
    teclado: true
};
preencherDados(computador);
preencherDados({
    nome: "Notebook",
    preco: 2000,
    teclado: true
});
function pintarCategoria(categoria) {
    console.log(categoria);
}
pintarCategoria("codigo");
