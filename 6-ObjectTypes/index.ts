//1 - tipo de objeto para função com interface
interface Product {
  name: string
  price:number;
  isAvailable:true
}


function showProductDetails(product: Product){
  console.log(`O nome do produto é: ${product.name} e seu preço é R$${product.price}`);
  if(product.isAvailable){
    console.log("O produto está disponivel");
  }
}

const shirt:Product = {
  name:"Camisa",
  price:19.99,
  isAvailable: true
}

showProductDetails(shirt);

//2 - propiedadeopcional em intereface

interface USer {
  email: string;
  role?: string;
}

function showDetails(user:USer) {
  console.log(`O usuário tem o e-mail: ${user.email}`)

  if(user.role){
    console.log(`A função do usuério é: ${user.role}`)
  }
}

const u1:USer = {email:"kened@email.com", role:"admin"}
const u2:USer = {email:"kened@email.com", role:"admin"}

showDetails(u1);
showDetails(u2);

//3 - readonly

interface Car {
  brand: string
  readonly wheels: number;
}

const fusca:Car = {
  brand: "VW",
  wheels:4
}

console.log(fusca)

//fusca.wheels = 5 ----> não é possivel com o readonly