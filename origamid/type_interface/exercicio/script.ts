"use strict";
async function fetchProduct() {
    const response = await fetch("https://api.origamid.dev/json/notebook.json");
    const data = await response.json();
    console.log(data);
    showProduct(data)
}

fetchProduct();

interface Empresa {
  fundacao:number;
  nome:string;
  pais:string;
}

interface IProduct {
  nome:string;
  preco:number;
  descricao:string;
  garantia: string;
  seguroAcidentes:boolean;
  empresaFabricante: Empresa;
  empresaMontadora: Empresa;

}
function showProduct(data : IProduct){
  document.body.innerHTML = `
    <div>
      <h2>${data.nome}</h2>
      <p>${data.preco}</p>
      <div>
        <h3>Fabricante: ${data.empresaFabricante.nome}</h3>
      </div>
      <div>
        <h3>Fabricante: ${data.empresaMontadora.nome}</h3>
      </div>
    </div>
  `
}
