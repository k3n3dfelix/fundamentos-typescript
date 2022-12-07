
type NumberOrString = string | number;

let total: NumberOrString = 20;
total = "30"

interface IProduto {
  nome:string;
  preco:number;
  teclado: boolean;
}

type TProduto = {
  nome:string;
  preco:number;
  teclado: boolean;
}

function preencherDados(dados: IProduto){
  document.body.innerHTML += `
    <div>
      <h2>${dados.nome}<h2>
      <p>${dados.preco}<p>
      <h2>Inclui teclado: ${dados.teclado ? 'Sim' : 'não'}<h2>
    </div>
  `
}

const computador: IProduto = {
  nome: "Computador",
  preco: 2000,
  teclado: true
}
preencherDados(computador);


preencherDados({
  nome: "Notebook",
  preco: 2000,
  teclado: true
});

type Categorias = 'design' | 'codigo' | 'descod';

function pintarCategoria(categoria: string){
  if(categoria === 'design'){
    console.log("Pintar vermelho")
  }
}

pintarCategoria("codigo")